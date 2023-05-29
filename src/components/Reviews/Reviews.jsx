import { useEffect, useState, React  } from 'react';
import { useParams} from 'react-router-dom';
import apiReviewsDetails from 'components/services/MoviesReviews';
import Loader from "components/Loader/Loader";
import Styles from 'components/Reviews/Reviews.module.css'
const Reviews = () => {
  const [reviews, setReviews] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [ , setError] = useState(null);
  const {movieId} = useParams();
  
  useEffect(()=> {
      if (!movieId) return;
      setIsLoading(true)
      apiReviewsDetails.FetchMoviesReviews(movieId).then((data) => 
        {const reviewsOfMovie = data.results
          setReviews( [...reviewsOfMovie])
       })
    .catch(error => {setError(error)}).finally(() => {
    setIsLoading(false)
            })}, [movieId])
  return (
    <div>
       {isLoading && <Loader/>}
    {reviews? (<ul className={Styles.list}>
    { reviews.map(({ id,  author, content })=> (<li key={id} className={Styles.item}>
        
<p className={Styles.titleName}>{author}</p>
<p >{content}</p>
</li>))}
    </ul>): null}
   
  
</div>
  )
}

export default Reviews
