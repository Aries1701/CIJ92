import React, { useEffect, useState } from "react";
import jsonData from "./data.json";
import "./explore.css";

export default function List() {
  const [lists, setLists] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    setLists(jsonData.data);
  }, []);


  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <section>
      <div>
        <h2 className="title">Explore</h2>
        <h2 className="sub">What are you gonna watch today ?</h2>

        
      {selectedMovie && (
        <div className="selected-movie">
          <h2 className="title">Selected Movie</h2>
          <div className="selected-movie-info">
            <img src={selectedMovie.image} alt="" className="selected-movie-image" />
            <div className="selected-movie-details">
              <h3>{selectedMovie.movieName}</h3>
              <p>{selectedMovie.description}</p>
              <p>Episode :{selectedMovie.episode}</p>
            </div>
          </div>
        </div>
      )}


        <div className="box2">
          {lists &&
            lists.slice(0, 1).map((data, index) => (
              <div className="card" key={index}>
                <img className="im" src={data.image} alt="" />
                <div className="inf">
                  <div className="name">{data.movieName}</div>
                  <div className="des">{data.description}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <h2 className="title">New Release</h2>

      <div className="box">
        {lists &&
          lists.map((data, index) => (
            <div className="" key={index}>
              <div
                className="movie-card"
                onClick={() => handleMovieClick(data)} 
              >
                <img src={data.image} alt="" className="movie-image" />
                <div className="episode-overlay">Episode {data.episode}</div>
                <div className="movie-name">{data.movieName}</div>
              </div>
            </div>
          ))}
      </div>

      
    </section>
  );
}
