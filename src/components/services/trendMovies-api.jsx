
function fetchMovies(url){ 
     const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2FlMjVjMDdmZmJkZTQ4MzNlOTI4MzAwODQ5MTY0ZSIsInN1YiI6IjY0NmNlYTMyYzM1MTRjMmIwYmY0MGJhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-xetNvo1KnrMsW_faMs9w9HxpC-ebylSqWAUjThjL_g'
      }
    };
    
   return fetch(url, options)
   .then(response => {
        if (response.ok) {
           return response.json();
         }
        return Promise.reject(new Error(`No movie`));
        })}
     const api = {
        fetchMovies,
     }
     
     export default api;
 
