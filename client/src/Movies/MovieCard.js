import React from 'react';
import {Link} from "react-router-dom";
import Movie from "./Movie"

class  MovieCard extends React.Component {
       constructor(props){
         super(props);

       }

       saveHandlerFunc = (event) => {
         event.preventDefault();
         this.props.saveHandlerFunc(this.props.movie);
       }
render() {


  return (
      <div className="movie-card">
        <h2>
          <Link to={`/movies/${this.props.movie.id}`}> {this.props.movie.title}</Link>
        </h2>
        <div className="movie-director">
          Director: <em>{this.props.movie.director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{this.props.movie.metascore}</strong>
        </div>
        <h3>Actors</h3>

        {this.props.movie.stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
        ))}
        <form onSubmit={this.saveHandlerFunc}>
          <button >SAVE</button>
        </form>
      </div>
  );
}

};

export default MovieCard;
