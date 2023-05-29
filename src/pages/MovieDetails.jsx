
import { useEffect, useState, useRef, React  } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import apiSearchDetails from 'components/services/moviesDetail-api';
import MoviesGalleryItem from 'components/MoviesGalleryItem/MoviesGalleryItem';
import Loader from "components/Loader/Loader";
import Styles from 'pages/MovieDetails.module.css'


const MovieDetails = () => {
    const [movies, setMovies] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [ , setError] = useState(null);
    const location = useLocation();
  
    const backLinkLocationRef = useRef(location.state?.from ?? '/');
    const {movieId} = useParams();
    
    useEffect(()=> {
        if (!movieId) return;
        setIsLoading(true)
        apiSearchDetails.FetchMoviesDetails(movieId).then((data) => 
          {const detailMovies = data
          setMovies( {...detailMovies})
         }
          )
      .catch(error => {setError(error)}).finally(() => {
      setIsLoading(false)
              })}, [movieId])
  return (
    <div>
              <Link to={backLinkLocationRef.current} className={Styles.Link}>Go back</Link>
              {isLoading && <Loader/>}
<MoviesGalleryItem detailMovies={movies}/>
<h3 className={Styles.title}>Additional information</h3>
<Link to='cast' className={Styles.Link}>Cast</Link>
<Link to='Reviews'className={Styles.Link}>Reviews</Link>
<Outlet />
    </div>
  )
}

export default MovieDetails
