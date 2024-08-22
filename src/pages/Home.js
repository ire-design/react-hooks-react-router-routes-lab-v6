import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";  // Import NavBar
import MovieCard from "../components/MovieCard";  // Import MovieCard

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from your API or use static data
    fetch("http://localhost:4000/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <>
      <header>
        <NavBar />  {/* Include NavBar component */}
      </header>
      <main>
        <h1>Home Page</h1>
        <div>
          {movies.map((movie) => (
            <MovieCard key={movie.id} id={movie.id} title={movie.title} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
