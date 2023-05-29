
import PropTypes from 'prop-types';
import Styles from 'components/MoviesGalleryItem/MoviesGalleryItem.module.css'

const posterUrl = 'https://image.tmdb.org/t/p/w500';
const noPosterUrl = 'https://sd.keepcalms.com/i/keep-calm-poster-not-found.png';



const MoviesGalleryItem =({
    detailMovies: {
      poster_path,
      title,
      vote_average,
      genres,
      overview},
  })=> {

    const percentagesVote=(vote)=>{
      return (vote*10).toFixed()}

    return(
        <div className={Styles.container}>
      
             <img className={Styles.image} src={poster_path ? `${posterUrl}${poster_path}` : noPosterUrl}  alt="" width="370" />
             <div className={Styles.trumb}>
             <h3>{title}</h3>
             <p>User score: {percentagesVote(vote_average)}%</p>
             <p><span> Overview:</span> {overview}</p>
             {genres? <ul><p>Genres:</p>
        {genres.map(({id, name}) => ( <li key={id}>{name}</li>))}
        </ul>: null}
             </div>
        </div>
    )
}

MoviesGalleryItem.propTypes ={
    detailMovies: PropTypes.object.isRequired
 }        


export default MoviesGalleryItem