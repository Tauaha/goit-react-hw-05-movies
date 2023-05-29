
import { useEffect, useState, React } from 'react'
import MoviesApi from 'components/services/trendMovies-api'
import MoviesGallery from 'components/MoviesGallery/MoviesGallery'
import Loader from "components/Loader/Loader";


const getTrending = `https://api.themoviedb.org/3/trending/movie/day?`

const Home = () => {
const [movies, setMovies] = useState([])
const [isLoading, setIsLoading] = useState(false)
const [ , setError] = useState(null);


useEffect(()=> {
  setIsLoading(true)
  MoviesApi.fetchMovies(getTrending).then((data) => 
    {const trendMovies = data.results
    setMovies([ ...trendMovies])
   })
.catch(error => {setError(error)}).finally(() => {
setIsLoading(false)
        })}, [])


  return (
<main>
     <h1>Trending Today</h1>
     {isLoading && <Loader/>}
    { movies.length > 1 ? <MoviesGallery moviesList={movies}/> : null}
    </main>

  )}

export default Home
