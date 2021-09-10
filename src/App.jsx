import "./App.css";
import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [movie, setmovie] = useState("");
  const [result, setresult] = useState(false);
  // for deciding which value to show
  const [director, setdirector] = useState(false);
  const [moviename, setmoviename] = useState(false);
  const [genre, setgenre] = useState(false);
  const [plot, setplot] = useState(false);
  // to get the values from the api
  const [apimoviename, setapimoviename] = useState("");
  const [apidirector, setapidirector] = useState("");
  const [apigenre, setapigenre] = useState("");
  const [apiplot, setapiplot] = useState("");
  const [poster, setposter] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://www.omdbapi.com/?apikey=5677e549&t=${movie}&plot=full`)
      .then((res) => {
        console.log(res.data);
        setresult(true);
        setapimoviename(res.data.Title);
        setapidirector(res.data.Director);
        setapigenre(res.data.Genre);
        setapiplot(res.data.Plot);
        setposter(res.data.Poster);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1 className="first">Movie Place</h1>
        <input
          type="text"
          placeholder="Enter the movie name"
          value={movie}
          onChange={(e) => setmovie(e.target.value)}
        />
        <h2>Features you want to see:</h2>
        <input
          type="checkbox"
          id="director"
          name="director"
          onChange={() => setdirector(!director)}
        />
        <label htmlFor="director">Director</label>

        <input
          type="checkbox"
          id="moviename"
          name="moviename"
          onChange={() => setmoviename(!moviename)}
        />
        <label htmlFor="moviename">Movie Name</label>
        <input
          type="checkbox"
          id="genre"
          name="genre"
          onChange={() => setgenre(!genre)}
        />
        <label htmlFor="genre">Genre</label>
        <input
          type="checkbox"
          id="plot"
          name="plot"
          onChange={() => setplot(!plot)}
        />
        <label htmlFor="plot">Plot</label>
        <button type="submit">Get Movie</button>
      </form>
      {result ? (
        <div>
          <img src={poster} alt="" />
          {moviename ? <h1>{apimoviename}</h1> : <></>}
          {director ? <h2>{apidirector}</h2> : <></>}
          {genre ? <h2>{apigenre}</h2> : <></>}
          {plot ? <p>{apiplot}</p> : <></>}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
