
import { useEffect, useState, React  } from 'react';
import { useParams} from 'react-router-dom';
import apiCastDetails from 'components/services/MoviesCast'
import Loader from "components/Loader/Loader";
import Styles from 'components/Cast/Cast.module.css'

const posterUrl = 'https://image.tmdb.org/t/p/w500';
const noPosterUrl = 'https://sd.keepcalms.com/i/keep-calm-poster-not-found.png';

const Cast = () => {
    const [cast, setCast] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [ , setError] = useState(null);

  
   
    const {movieId} = useParams();
    
    useEffect(()=> {
        if (!movieId) return;
        setIsLoading(true)
        apiCastDetails.FetchMoviesCast(movieId).then((data) => 
          {const castOfMovie = data.cast
            setCast( [...castOfMovie])
         })
      .catch(error => {setError(error)}).finally(() => {
      setIsLoading(false)
              })}, [movieId])
  return (
    <div>
         {isLoading && <Loader/>}
        {cast? (<ul className={Styles.list}>
        { cast.map(({ id, profile_path, name, character })=> (<li key={id} className={Styles.item}>
            <img  src={profile_path ? `${posterUrl}${profile_path}` : noPosterUrl}  alt="" width="100" />
    <p className={Styles.titleName}>{name}</p>
    <p className={Styles.titleName}>Character: {character}</p>
 </li>))}
        </ul>): null}
       
      
    </div>
  )
}

export default Cast
