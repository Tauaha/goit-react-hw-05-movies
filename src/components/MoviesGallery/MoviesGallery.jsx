
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import Styles from 'components/MoviesGallery/MoviesGallery.module.css'

const MoviesGallery = ({ moviesList }) => {
   
  const location = useLocation()
   return (<ul className={Styles.MoviesGallery} >
          {moviesList.map(({ id,  title }) => (
          <li key={id} className={Styles.item} >
             <Link to={`/${id}`} state={{from: location}} className={Styles.Link}>
            {title}
              </Link>
            </li>))}
  </ul>)
}
     
  
MoviesGallery.propTypes ={
    moviesList: PropTypes.array.isRequired
 
 }        



export default MoviesGallery
