import {  Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react'
import Loader from "components/Loader/Loader";
import apiSearch from 'components/services/searchMovies-api'
import Searchbar from 'components/Searchbar/Searchbar'
import MoviesGallery from "components/MoviesGallery/MoviesGallery";



const Movies = () => {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [ , setError] = useState(null);

  const location = useLocation();

  useEffect(()=> {
    if (!query) return;
    setIsLoading(true)
    apiSearch.fetchMoviesOnSearch(query).then((data) => 
   
      {const searchMovies = data.results
      setMovies([ ...searchMovies])
     }
      )
  .catch(error => {setError(error)}).finally(() => {
  setIsLoading(false)
          })}, [query, page])
  
  

  const handleFormSubmit = query => {
    setQuery(query);
    setMovies([])
    setPage(1)
  }
  return (
    <main>
   <Searchbar onSubmitForm={handleFormSubmit}/>
   {isLoading && <Loader/>}
   { movies.length > 1 ? <MoviesGallery moviesList={movies} state={{ from: location }}/> : null}
    <Outlet />
  </main>
  )
}

export default Movies
