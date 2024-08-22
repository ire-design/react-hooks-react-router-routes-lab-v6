import { Link } from 'react-router-dom';

function MovieCard({ id, title }) {  // Include the 'id' prop
  return (
    <article>
      <h2>{title}</h2>
      <Link to={`/movie/${id}`}>View Info</Link>  // Link to the specific movie route
    </article>
  );
}

export default MovieCard;
