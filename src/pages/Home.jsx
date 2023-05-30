
import { useEffect, useState, React } from 'react'
import {dataMovieList} from 'components/services/trendMovies-api'
import MoviesGallery from 'components/MoviesGallery/MoviesGallery'
import Loader from "components/Loader/Loader";




const Home = () => {
const [movies, setMovies] = useState([])
const [isLoading, setIsLoading] = useState(false)
const [ , setError] = useState(null);



useEffect(()=> {
  const getTrending = async () => {
    try {
      setIsLoading(true);
      const responsMovies = await dataMovieList();
      setMovies(responsMovies)
    } catch (error) {setError(error)} finally {
      setIsLoading(false);
    }
  };
  getTrending();
}, []);
//   setIsLoading(true)
//   dataMovieList().then(data => 
//     // setMovies([ ...data.results])
//     console.log(data.results)
//     )
// .catch(error => {setError(error)}).finally(() => {
// setIsLoading(false)
//         })}, [])


  return (
<main>
     <h1>Trending Today</h1>
     {isLoading && <Loader/>}
    { movies.length > 1 ? <MoviesGallery moviesList={movies}/> : null}
    </main>

  )}

export default Home
