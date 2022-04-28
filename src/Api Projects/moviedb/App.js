import React from "react";
import { useGlobalContext } from "./context";
import Movie from "./Movie";
import "./App.css";

const App = () => {
  const { movies, loading, /*searchQuery*/ setSearch } = useGlobalContext();

  if (!loading) {
  }

//   function handleChange(e){
//       e.preventDefault();
//       searchQuery(e.target.value);
      

//   }

  return (
    <main className="main-page">
      <div className="search-movies-heading">Search Movies</div>

      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <input id="search" type="text" placeholder="search" onChange={(e) => setSearch(e.target.value)} />
      </form>
      {!loading ? <section className="movies">
        {movies.map((movie) => (
          <Movie key={movie.imdbID} {...movie} />
        ))}
      </section> : <h1>Loading...</h1>}
    </main>
  );
};

export default App;
