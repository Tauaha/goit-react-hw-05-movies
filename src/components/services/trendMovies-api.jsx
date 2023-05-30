// const options = {
//   headers: {
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2FlMjVjMDdmZmJkZTQ4MzNlOTI4MzAwODQ5MTY0ZSIsInN1YiI6IjY0NmNlYTMyYzM1MTRjMmIwYmY0MGJhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-xetNvo1KnrMsW_faMs9w9HxpC-ebylSqWAUjThjL_g'
//   }
// }
// const getTrending = `https://api.themoviedb.org/3/trending/movie/day?`
// const fetchMovies=()=>{ 
//    return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=5f2a66e63fa9a8139a0b7e8b9aba27ca`).then(response => {
//         if (!response.ok) {
//           return Promise.reject(new Error(`No movie`));
         
//           //  return response.json();
//          }
//         // console.log(response.json())
//          return response.json();
//         })}
//     //  const api = {
//     //     fetchMovies,
//     //  }
     
//      export default fetchMovies;
 
import axios from 'axios';
const KEY = '5f2a66e63fa9a8139a0b7e8b9aba27ca';
const URL = 'https://api.themoviedb.org/';
const language = 'en';
axios.defaults.baseURL = URL;
// список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці
export const dataMovieList = async () => {
  try {
    const server = await axios.get(`3/trending/movie/day?api_key=${KEY}`);
    const data = await server.data.results;
    return data;
    //console.log(data)
  } catch (error) {
    console.error(error);
  }
};



