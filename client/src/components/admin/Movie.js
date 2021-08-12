import React, { useEffect, useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Publish } from '@material-ui/icons';
import { getMovie, updateMovie } from '../context/movieContext/MovieApi';
import { MovieContext } from '../context/movieContext/MovieContext';
import storage from '../../firebase';

const Movie = () => {
  const location = useLocation();
  const movie = location.movie;
  const moviePathname = location.pathname.split('/');
  const movieId = moviePathname[moviePathname.length - 1];
  const { dispatch } = useContext(MovieContext);

  const [currentMovie, setCurrentMovie] = useState({ ...movie });
  const [imageHero, setImageHero] = useState(null);
  const [imageTitle, setImageTitle] = useState(null);
  const [imagePin, setImagePin] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);

  const [uploaded, setUploaded] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;
    setCurrentMovie({ ...currentMovie, [e.target.name]: value });
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
            setCurrentMovie((prev) => ({ ...prev, [item.label]: url }));
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

  useEffect(() => {
    getMovie(movieId, dispatch).then((data) => {
      setCurrentMovie({ ...data });
      setImageHero(data.imageHero || '');
      setTrailer(data.trailer || '');
      setVideo(data.video || '');
      setImagePin(data.imagePin || '');
      setImageTitle(data.imageTitle || '');
    });
  }, [dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    updateMovie(movieId, currentMovie, dispatch);
  };

  return (
    <div className='movie'>
      <div className='movie__header'>
        <h1 className='movie__title'>Movies</h1>
        <Link to='/admin/add-new-movie'>
          <button className='movie__add-btn'>Create</button>
        </Link>
      </div>
      <div className='movie__top'>
        <div className='movie__right'>
          <div className='movie__info-top'>
            <img className='movie__info-image' src={currentMovie.imageHero} alt='' />
            <span className='movie__name'>{currentMovie.title}</span>
          </div>
          <div className='movie__info-bottom'>
            <div className='movie__item'>
              <span className='movie__key'>id:</span>
              <span className='movie__value'>{currentMovie._id}</span>
            </div>
            <div className='movie__item'>
              <span className='movie__key'>genre:</span>
              <span className='movie__value'>{currentMovie.genre}</span>
            </div>
            <div className='movie__item'>
              <span className='movie__key'>year:</span>
              <span className='movie__value'>{currentMovie.year}</span>
            </div>
            <div className='movie__item'>
              <span className='movie__key'>limit:</span>
              <span className='movie__value'>{currentMovie.limit}</span>
            </div>
          </div>
        </div>
      </div>

      <div className='movie__bottom'>
        <form className='movie__form' onSubmit={submitHandler}>
          <div className='movie__form-left'>
            <label>Movie Title</label>
            <input
              type='text'
              name='title'
              placeholder={currentMovie.title}
              onChange={(e) => handleChange(e)}
            />
            <label>Year</label>
            <input
              type='text'
              name='year'
              placeholder={currentMovie.year}
              onChange={(e) => handleChange(e)}
            />
            <label>Genre</label>
            <input
              type='text'
              name='genre'
              placeholder={currentMovie.genre}
              onChange={(e) => handleChange(e)}
            />
            <label>Limit</label>
            <input
              type='text'
              name='limit'
              placeholder={currentMovie.limit}
              onChange={(e) => handleChange(e)}
            />
            <label>Description</label>
            <textarea
              placeholder={currentMovie.description}
              name='description'
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className='movie__form-right'>
            <div className='movie__file-containers'>
              <label>Trailer</label>
              <div className='movie__upload'>
                <video className='movie__upload-image' src={trailer} alt='' />
                <label htmlFor='trailer'>
                  <Publish className='movie__upload-btn' />
                </label>
                <input
                  type='file'
                  id='trailer'
                  name='trailer'
                  style={{ display: 'none' }}
                  onChange={(e) => setTrailer(URL.createObjectURL(e.target.files[0]))}
                />
              </div>
            </div>

            <div className='movie__file-containers'>
              <label>Video</label>
              <div className='movie__upload'>
                <video className='movie__upload-image' src={video} alt='' />
                <label htmlFor='video'>
                  <Publish className='movie__upload-btn' />
                </label>
                <input
                  type='file'
                  id='video'
                  name='video'
                  style={{ display: 'none' }}
                  onChange={(e) => setVideo(URL.createObjectURL(e.target.files[0]))}
                />
              </div>
            </div>

            <div className='movie__file-containers'>
              <label>Thumbnail</label>
              <div className='movie__upload'>
                <img className='movie__upload-image' src={imagePin} alt='' />
                <label htmlFor='thumbnail'>
                  <Publish className='movie__upload-btn' />
                </label>
                <input
                  type='file'
                  id='thumbnail'
                  name='thumbnail'
                  style={{ display: 'none' }}
                  onChange={(e) => setImagePin(URL.createObjectURL(e.target.files[0]))}
                />
              </div>
            </div>

            <div className='movie__file-containers'>
              <label>Image</label>
              <div className='movie__upload'>
                <img className='movie__upload-image' src={imageHero} alt='' />
                <label htmlFor='image'>
                  <Publish className='movie__upload-btn' />
                </label>
                <input
                  type='file'
                  id='image'
                  name='imageHero'
                  style={{ display: 'none' }}
                  onChange={(e) => setImageHero(URL.createObjectURL(e.target.files[0]))}
                />
              </div>
            </div>

            <div className='movie__file-containers'>
              <label>Title Image</label>
              <div className='movie__upload'>
                <img className='movie__upload-image' src={imageTitle} alt='' />
                <label htmlFor='imageTitle'>
                  <Publish className='movie__upload-btn' />
                </label>
                <input
                  type='file'
                  id='imageTitle'
                  name='imageTitle'
                  style={{ display: 'none' }}
                  onChange={(e) => setImageTitle(URL.createObjectURL(e.target.files[0]))}
                />
              </div>
            </div>
            {uploaded === 5 ? (
              <button className='movie__update-btn submit'>Update</button>
            ) : (
              <button className='movie__update-btn upload' onClick={handleUpload}>
                Upload
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Movie;
