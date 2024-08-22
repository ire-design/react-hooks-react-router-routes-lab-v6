import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";  // Import NavBar

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    // Fetch actors data
    fetch("http://localhost:4000/actors")
      .then((response) => response.json())
      .then((data) => setActors(data));
  }, []);

  return (
    <>
      <header>
        <NavBar />  {/* Include NavBar component */}
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map((actor) => (
          <article key={actor.name}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Actors;
