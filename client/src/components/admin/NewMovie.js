import React, { useContext, useState } from 'react';
import storage from '../../firebase';
import { createMovie } from '../context/movieContext/MovieApi';
import { MovieContext } from '../context/movieContext/MovieContext';

const NewMovie = () => {
  const [movie, setMovie] = useState(null);
  const [imageHero, setImageHero] = useState(null);
  const [imageTitle, setImageTitle] = useState(null);
  const [imagePin, setImagePin] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const upload = (items) => {
    items.forEach((item) => {
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
            setMovie((prev) => ({ ...prev, [item.label]: url }));
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: imageHero, label: 'imageHero' },
      { file: imageTitle, label: 'imageTitle' },
      { file: imagePin, label: 'imagePin' },
      { file: trailer, label: 'trailer' },
      { file: video, label: 'video' },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie, dispatch);
  };

  return (
    <div className='newmovie'>
      <h1 className='newmovie__title'>New Movie</h1>
      <form className='newmovie__form'>
        <div className='newmovie__item'>
          <label>Image</label>
          <input
            type='file'
            id='image'
            name='imageHero'
            onChange={(e) => setImageHero(e.target.files[0])}
          />
        </div>
        <div className='newmovie__item'>
          <label>Title Image</label>
          <input
            type='file'
            id='imageTitle'
            name='imageTitle'
            onChange={(e) => setImageTitle(e.target.files[0])}
          />
        </div>
        <div className='newmovie__item'>
          <label>Thumbnail</label>
          <input
            type='file'
            id='thumbnail'
            name='imagePin'
            onChange={(e) => setImagePin(e.target.files[0])}
          />
        </div>
        <div className='newmovie__item'>
          <label>Trailer</label>
          <input type='file' name='trailer' onChange={(e) => setTrailer(e.target.files[0])} />
        </div>
        <div className='newmovie__item'>
          <label>Video</label>
          <input type='file' name='video' onChange={(e) => setVideo(e.target.files[0])} />
        </div>
        <div className='newmovie__item'>
          <label>Title</label>
          <input
            type='text'
            placeholder='Avengers'
            name='title'
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='newmovie__item'>
          <label>Description</label>
          <input
            type='text'
            placeholder='Description'
            name='description'
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='newmovie__item'>
          <label>Year</label>
          <input type='text' placeholder='Year' name='year' onChange={(e) => handleChange(e)} />
        </div>
        <div className='newmovie__item'>
          <label>Genre</label>
          <input type='text' placeholder='Genre' name='genre' onChange={(e) => handleChange(e)} />
        </div>
        <div className='newmovie__item'>
          <label>Duration</label>
          <input
            type='text'
            placeholder='Duration'
            name='duration'
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='newmovie__item'>
          <label>Limit</label>
          <input type='text' placeholder='Limit' name='limit' onChange={(e) => handleChange(e)} />
        </div>
        <div className='newmovie__item'>
          <label>Is Series?</label>
          <select name='active' id='isSeries' name='isSeries' onChange={(e) => handleChange(e)}>
            <option value='false'>No</option>
            <option value='true'>Yes</option>
          </select>
        </div>
        {uploaded === 5 ? (
          <button className='newmovie__create-btn' onClick={handleSubmit}>
            Create
          </button>
        ) : (
          <button className='newmovie__create-btn' onClick={handleUpload}>
            Upload
          </button>
        )}
      </form>
    </div>
  );
};

export default NewMovie;
