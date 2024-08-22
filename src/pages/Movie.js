import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";  // Import useParams to access URL parameters
import NavBar from "../components/NavBar";  // Import NavBar

function Movie() {
  const { id } = useParams();  // Get the movie id from the URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch the movie data based on the id
    fetch(`http://localhost:4000/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <p>Loading...</p>;  // Show loading state if movie data isn't available

  return (
    <>
      <header>
        <NavBar />  {/* Include NavBar component */}
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Time: {movie.time}</p>
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre} </span>
        ))}
      </main>
    </>
  );
}

export default Movie;
