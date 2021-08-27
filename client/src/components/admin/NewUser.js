import { Publish } from '@material-ui/icons';
import React, { useContext, useState } from 'react';
import storage from '../../firebase';
import { createUser } from '../context/userContext/UserApi';
import { UserContext } from '../context/userContext/UserContext';

const NewUser = () => {
  const [user, setUser] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [uploaded, setUploaded] = useState(false);
  const { dispatch } = useContext(UserContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const handleFile = async (e, cb) => {
    const img = document.querySelector('.newuser__image');
    const file = e.target.files[0];
    cb(file);
    const source = await URL.createObjectURL(file);
    if (img) {
      img.src = source;
      img.onload = () => {
        URL.revokeObjectURL(img.src);
      };
    }
  };

  const upload = (items) => {
    items.forEach((item) => {
      if (item.file.size > 0) {
        const fileName = new Date().getTime() + item.label + item.file.name;
        const uploadTask = storage.ref(`/content/${fileName}`).put(item.file);
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
          },
          (error) => {
            console.log(error);
          },
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then((url) => {
              console.log('File available at', url);
              setUser((prev) => ({ ...prev, [item.label]: url }));
              setUploaded(true);
            });
          }
        );
      } else {
        setUploaded(true);
      }
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([{ file: profileImage, label: 'profileImage' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(user, dispatch).then((data) => {
      if (data) window.location.reload();
    });
  };

  return (
    <div className='newuser'>
      <h1 className='newuser__title'>New User</h1>
      <form className='newuser__form' onSubmit={handleSubmit}>
        <div className='newuser__item'>
          <label>Username</label>
          <input
            type='text'
            placeholder='jonsnow99'
            name='username'
            required
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='newuser__item'>
          <label>Full Name</label>
          <input
            type='text'
            placeholder='jon snow'
            name='full name'
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='newuser__item'>
          <label>Email</label>
          <input
            type='email'
            placeholder='jonsnow@gmail.com'
            name='email'
            required
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='newuser__item'>
          <label>Password</label>
          <input
            type='password'
            placeholder='password'
            name='password'
            required
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='newuser__item'>
          <label>Gender</label>
          <div className='newuser__gender'>
            <input
              type='radio'
              name='gender'
              id='male'
              value='male'
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor='male'>Male</label>
            <input
              type='radio'
              name='gender'
              id='female'
              value='female'
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor='female'>Female</label>
            <input
              type='radio'
              name='gender'
              id='other'
              value='other'
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor='other'>Other</label>
          </div>
        </div>
        <div className='newuser__item'>
          <label>Active</label>
          <select
            className='newuser__select'
            name='active'
            id='active'
            onChange={(e) => handleChange(e)}
          >
            <option>none selected</option>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <div className='newuser__item'>
          <div className='newuser__upload'>
            <img className='newuser__image' src={profileImage} alt='' />
            <label htmlFor='file'>
              <Publish className='newuser__icon' />
            </label>
            <input
              type='file'
              id='file'
              name='profileImage'
              accept='image/*'
              onChange={(e) => handleFile(e, setProfileImage)}
              required
              style={{ display: 'none' }}
            />
          </div>
        </div>
        {uploaded ? (
          <button className='newuser__create-btn'>Create</button>
        ) : (
          <button className='newuser__upload-btn' onClick={handleUpload}>
            Upload Photo
          </button>
        )}
      </form>
    </div>
  );
};

export default NewUser;
