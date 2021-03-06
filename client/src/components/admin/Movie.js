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

  const handleFile = async (e, cb) => {
    const img = document.querySelector(`.movie__upload-image-${e.target.name}`);
    const video = document.querySelector(`.movie__upload-video-${e.target.name}`);
    const file = e.target.files[0];
    cb(file);
    const source = await URL.createObjectURL(file);
    if (img) {
      img.src = source;
      img.onload = () => {
        URL.revokeObjectURL(img.src);
      };
    } else if (video) {
      video.src = source;
      video.onload = () => {
        URL.revokeObjectURL(video.src);
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
              setCurrentMovie((prev) => ({ ...prev, [item.label]: url }));
              setUploaded((prev) => prev + 1);
            });
          }
        );
      } else {
        setUploaded((prev) => prev + 1);
      }
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

  const submitHandler = (e) => {
    e.preventDefault();
    updateMovie(movieId, currentMovie, dispatch).then((data) => {
      if (data) window.location.reload();
    });
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

  return (
    <div className='movie'>
      <div className='movie__header'>
        <h1 className='movie__title'>Movies</h1>
        <Link to='/admin/add-new-movie'>
          <button className='movie__add-btn'>Create New Movie</button>
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
                <video
                  className='movie__upload-video movie__upload-video-trailer'
                  src={trailer}
                  alt=''
                />
                <label htmlFor='trailer'>
                  <Publish className='movie__upload-btn' />
                </label>
                <input
                  type='file'
                  id='trailer'
                  name='trailer'
                  accept='video/*'
                  style={{ display: 'none' }}
                  onChange={(e) => handleFile(e, setTrailer)}
                />
              </div>
            </div>

            <div className='movie__file-containers'>
              <label>Video</label>
              <div className='movie__upload'>
                <video
                  className='movie__upload-video movie__upload-video-video'
                  src={video}
                  alt=''
                />
                <label htmlFor='video'>
                  <Publish className='movie__upload-btn' />
                </label>
                <input
                  type='file'
                  id='video'
                  name='video'
                  accept='video/*'
                  style={{ display: 'none' }}
                  onChange={(e) => handleFile(e, setVideo)}
                />
              </div>
            </div>

            <div className='movie__file-containers'>
              <label>Thumbnail</label>
              <div className='movie__upload'>
                <img
                  className='movie__upload-image movie__upload-image-thumbnail'
                  src={imagePin}
                  alt=''
                />
                <label htmlFor='thumbnail'>
                  <Publish className='movie__upload-btn' />
                </label>
                <input
                  type='file'
                  id='thumbnail'
                  name='thumbnail'
                  accept='image/*'
                  style={{ display: 'none' }}
                  onChange={(e) => handleFile(e, setImagePin)}
                />
              </div>
            </div>

            <div className='movie__file-containers'>
              <label>Image</label>
              <div className='movie__upload'>
                <img
                  className='movie__upload-image movie__upload-image-imageHero'
                  src={imageHero}
                  alt=''
                />
                <label htmlFor='image'>
                  <Publish className='movie__upload-btn' />
                </label>
                <input
                  type='file'
                  id='image'
                  name='imageHero'
                  accept='image/*'
                  style={{ display: 'none' }}
                  onChange={(e) => handleFile(e, setImageHero)}
                />
              </div>
            </div>

            <div className='movie__file-containers'>
              <label>Title Image</label>
              <div className='movie__upload'>
                <img
                  className='movie__upload-image movie__upload-image-imageTitle'
                  src={imageTitle}
                  alt=''
                />
                <label htmlFor='imageTitle'>
                  <Publish className='movie__upload-btn' />
                </label>
                <input
                  type='file'
                  id='imageTitle'
                  name='imageTitle'
                  accept='image/*'
                  style={{ display: 'none' }}
                  onChange={(e) => handleFile(e, setImageTitle)}
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
