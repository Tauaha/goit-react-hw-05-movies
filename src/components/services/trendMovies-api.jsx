
import axios from 'axios';
const KEY = '5f2a66e63fa9a8139a0b7e8b9aba27ca';
const URL = 'https://api.themoviedb.org/';
axios.defaults.baseURL = URL;

// список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці
export const dataMovieList = async () => {
  try {
    const server = await axios.get(`3/trending/movie/day?api_key=${KEY}`);
    const data = await server.data.results;
    return data;
  } catch (error) {
    console.error(error);
  }
};



