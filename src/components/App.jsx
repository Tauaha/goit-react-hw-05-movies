import { Routes, Route } from "react-router-dom";
import { lazy } from 'react';
import  SharedLayout  from "components/SharedLayout/SharedLayout";

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export const App = () => {
  return ( 
      <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />}/>
        <Route path="/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}/>
          <Route path="reviews" element={<Reviews />}/>
        </Route>
        </Route>
      </Routes>
   
  )
};
