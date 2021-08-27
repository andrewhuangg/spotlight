import { CalendarToday, MailOutline, PermIdentity, Publish } from '@material-ui/icons';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../context/userContext/UserContext';
import { getUser, updateUser } from '../context/userContext/UserApi';
import storage from '../../firebase';

const User = () => {
  const location = useLocation();
  const user = location.user;
  const userPathname = location.pathname.split('/');
  const userId = userPathname[userPathname.length - 1];
  const { dispatch } = useContext(UserContext);

  const [currentUser, setCurrentUser] = useState({ ...user });
  const [profileImage, setProfileImage] = useState(null);
  const [uploaded, setUploaded] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setCurrentUser({ ...currentUser, [e.target.name]: value });
  };

  const handleFile = async (e, cb) => {
    const img = document.querySelector('.user__update-image');
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
              setCurrentUser((prev) => ({ ...prev, [item.label]: url }));
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

  const submitHandler = (e) => {
    e.preventDefault();
    updateUser(userId, currentUser, dispatch).then((data) => {
      if (data) window.location.reload();
    });
  };

  useEffect(() => {
    getUser(userId, dispatch).then((data) => {
      setCurrentUser({ ...data });
      setProfileImage(data.profileImage || '');
    });
  }, [dispatch]);

  return (
    <div className='user'>
      <div className='user__title-container'>
        <h1 className='user__title'>Edit User</h1>
        <Link to='/admin/create-new-user'>
          <button className='user__add-btn'>Create New User</button>
        </Link>
      </div>

      <div className='user__container'>
        <div className='user__show'>
          <div className='user__top'>
            <img className='user__image' src={currentUser.profileImage} alt='' />
            <div className='user__header'>
              <span className='user__username'>{currentUser.username}</span>
            </div>
          </div>

          <div className='user__bottom'>
            <span className='user__details'>Account Details</span>
            <div className='user__info-container'>
              <PermIdentity className='user__icon' />
              <span className='user__info'>{currentUser.username}</span>
            </div>
            <div className='user__info-container'>
              <CalendarToday className='user__icon' />
              <span className='user__info'>{currentUser.createdAt}</span>
            </div>
            <span className='user__details'>Contact Details</span>
            <div className='user__info-container'>
              <MailOutline className='user__icon' />
              <span className='user__info'>{currentUser.email}</span>
            </div>
          </div>
        </div>

        <div className='user__update'>
          <span className='user__update-title'>Edit</span>

          <form className='user__update-form' onSubmit={submitHandler}>
            <div className='user__form-left'>
              <div className='user__form-item'>
                <label>Username</label>
                <input
                  type='text'
                  name='username'
                  placeholder={currentUser.username}
                  onChange={(e) => handleChange(e)}
                  className='user__input'
                />
              </div>
              <div className='user__form-item'>
                <label>Email</label>
                <input
                  type='text'
                  name='email'
                  placeholder={currentUser.email}
                  onChange={(e) => handleChange(e)}
                  className='user__input'
                />
              </div>
            </div>
            <div className='user__form-right'>
              <div className='user__update-upload'>
                <img className='user__update-image' src={currentUser.profileImage} alt='' />
                <label htmlFor='file'>
                  <Publish className='user__update-icon' />
                </label>
                <input
                  type='file'
                  id='file'
                  name='profileImage'
                  accept='image/*'
                  onChange={(e) => handleFile(e, setProfileImage)}
                  style={{ display: 'none' }}
                />
              </div>
              {uploaded ? (
                <button className='user__update-btn'>Update</button>
              ) : (
                <button className='user__update-btn' onClick={handleUpload}>
                  Upload
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
