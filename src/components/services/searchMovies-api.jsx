const BASE_URL = 'https://api.themoviedb.org/3/search/movie?'

function fetchMoviesOnSearch(query){
    const options = {
     headers: {
       accept: 'application/json',
       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2FlMjVjMDdmZmJkZTQ4MzNlOTI4MzAwODQ5MTY0ZSIsInN1YiI6IjY0NmNlYTMyYzM1MTRjMmIwYmY0MGJhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-xetNvo1KnrMsW_faMs9w9HxpC-ebylSqWAUjThjL_g'
     }};
   
  return fetch(`${BASE_URL}query=${query}&include_adult=false&language=en-US&page=1`, options)
  .then(response => {
       if (response.ok) {
          return response.json();
        }
       return Promise.reject(new Error(`No movie `));
       })}
    const apiSearch = {
        fetchMoviesOnSearch,
    }
    
    export default apiSearch;