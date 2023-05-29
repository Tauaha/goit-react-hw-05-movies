const BASE_URL = 'https://api.themoviedb.org/3/movie/'

function FetchMoviesReviews(movieId){
   
    const options = {
     method: 'GET',
     headers: {
       accept: 'application/json',
       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2FlMjVjMDdmZmJkZTQ4MzNlOTI4MzAwODQ5MTY0ZSIsInN1YiI6IjY0NmNlYTMyYzM1MTRjMmIwYmY0MGJhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-xetNvo1KnrMsW_faMs9w9HxpC-ebylSqWAUjThjL_g'
     }};
   
  return fetch(`${BASE_URL}${movieId}/reviews?language=en-US`, options)
  .then(response => {
       if (response.ok) {
          return response.json();
        }
    
       return Promise.reject(new Error(`No movie`))});
    }
    const apiReviewsDetails = {
        FetchMoviesReviews,
    }
    
    export default apiReviewsDetails;