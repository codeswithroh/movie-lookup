import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import woman from "./assets/woman.svg";

export default function App() {
  const [movie, setmovie] = useState("");
  const [result, setresult] = useState(false);
  // for deciding which value to show
  const [director, setdirector] = useState(false);
  const [actors, setactors] = useState(false);
  const [genre, setgenre] = useState(false);
  const [plot, setplot] = useState(false);
  const [awards, setawards] = useState(false);
  const [release, setrelease] = useState(false);
  const [runtime, setruntime] = useState(false);
  const [earnings, setearnings] = useState(false);
  const [writer, setwriter] = useState(false);
  // to get the values from the api
  const [apimoviename, setapimoviename] = useState("");
  const [apiactors, setapiactors] = useState("");
  const [apiawards, setapiawards] = useState("");
  const [apirelease, setapirelease] = useState("");
  const [apiruntime, setapiruntime] = useState("");
  const [apiearnings, setapiearnings] = useState("");
  const [apiwriter, setapiwriter] = useState("");
  const [apidirector, setapidirector] = useState("");
  const [apigenre, setapigenre] = useState("");
  const [apiplot, setapiplot] = useState("");
  const [poster, setposter] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://www.omdbapi.com/?apikey=5677e549&t=${movie}&plot=full`)
      .then((res) => {
        console.log(res.data);
        setresult(true);
        setapimoviename(res.data.Title);
        setapidirector(res.data.Director);
        setapigenre(res.data.Genre);
        setapiplot(res.data.Plot);
        setposter(res.data.Poster);
        setapiactors(res.data.Actors);
        setapiawards(res.data.Awards);
        setapirelease(res.data.Released);
        setapiruntime(res.data.Runtime);
        setapiearnings(res.data.BoxOffice);
        setapiwriter(res.data.Writer);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <div className="movie-container">
        <div className="movie-content">
          <div className="movie-left">
            <form onSubmit={(e) => handleSubmit(e)}>
              <p className="main-heading">
                Become A Movie Geek With A Single Click
              </p>
              <input
                type="text"
                minLength={4}
                maxLength={40}
                className="movie-name-input"
                placeholder="Enter the movie name"
                value={movie}
                onChange={(e) => setmovie(e.target.value)}
              />
              <p className="sub-heading">Choose the things you want to know:</p>
              <div className="movie-options">
                <div className="option-set-1">
                  <div className="input-director">
                    <input
                      type="checkbox"
                      id="director"
                      name="director"
                      onChange={() => setdirector(!director)}
                    />
                    <label htmlFor="director">Director</label>
                  </div>
                  <div className="input-movie-name">
                    <input
                      type="checkbox"
                      id="actors"
                      name="actors"
                      onChange={() => setactors(!actors)}
                    />
                    <label htmlFor="actors">Actors</label>
                  </div>
                  <div className="input-genre">
                    <input
                      type="checkbox"
                      id="genre"
                      name="genre"
                      onChange={() => setgenre(!genre)}
                    />
                    <label htmlFor="genre">Genre</label>
                  </div>
                </div>
                <div className="option-set-1">
                  <div className="input-plot">
                    <input
                      type="checkbox"
                      id="plot"
                      name="plot"
                      onChange={() => setplot(!plot)}
                    />
                    <label htmlFor="plot">Plot</label>
                  </div>
                  <div className="input-awards">
                    <input
                      type="checkbox"
                      id="awards"
                      name="awards"
                      onChange={() => setawards(!awards)}
                    />
                    <label htmlFor="awards">Awards</label>
                  </div>
                  <div className="input-release">
                    <input
                      type="checkbox"
                      id="release"
                      name="release"
                      onChange={() => setrelease(!release)}
                    />
                    <label htmlFor="release">Release</label>
                  </div>
                </div>
                <div className="option-set-1">
                  <div className="input-runtime">
                    <input
                      type="checkbox"
                      id="runtime"
                      name="runtime"
                      onChange={() => setruntime(!runtime)}
                    />
                    <label htmlFor="runtime">Runtime</label>
                  </div>
                  <div className="input-earnings">
                    <input
                      type="checkbox"
                      id="earnings"
                      name="earnings"
                      onChange={() => setearnings(!earnings)}
                    />
                    <label htmlFor="earnings">Earnings</label>
                  </div>
                  <div className="input-writer">
                    <input
                      type="checkbox"
                      id="writer"
                      name="writer"
                      onChange={() => setwriter(!writer)}
                    />
                    <label htmlFor="writer">Writer</label>
                  </div>
                </div>
              </div>
              <button className="result-button" type="submit">
                Show Results
              </button>
            </form>
          </div>
          <div className="movie-right">
            <img className="movie-woman" src={woman} alt="" />
          </div>
        </div>
      </div>
      {result ? (
        <div className="result-main">
          <div className="result-container">
            <div className="result-left">
              <h1>{apimoviename}</h1>
              <img src={poster} alt="" />
            </div>
            <div className="result-right">
              {actors ? (
                <h2>
                  <span className="titles">Actors: </span>
                  {apiactors}
                </h2>
              ) : (
                <></>
              )}
              {awards ? (
                <h2>
                  <span className="titles">Awards: </span>
                  {apiawards}
                </h2>
              ) : (
                <></>
              )}
              {release ? (
                <h2>
                  <span className="titles">Release Date: </span>
                  {apirelease}
                </h2>
              ) : (
                <></>
              )}
              {earnings ? (
                <h2>
                  <span className="titles">Total Earnings: </span>
                  {apiearnings}
                </h2>
              ) : (
                <></>
              )}
              {runtime ? (
                <h2>
                  <span className="titles">Total Runtime: </span>
                  {apiruntime}
                </h2>
              ) : (
                <></>
              )}
              {writer ? (
                <h2>
                  <span className="titles">Writers: </span>
                  {apiwriter}
                </h2>
              ) : (
                <></>
              )}
              {director ? (
                <h2>
                  <span className="titles">Director: </span>
                  {apidirector}
                </h2>
              ) : (
                <></>
              )}
              {genre ? (
                <h2>
                  <span className="titles">Genre: </span>
                  {apigenre}
                </h2>
              ) : (
                <></>
              )}
              {plot ? (
                <h2 className="movie-plot">
                  <span className="titles">Plot: </span>
                  {apiplot}
                </h2>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
