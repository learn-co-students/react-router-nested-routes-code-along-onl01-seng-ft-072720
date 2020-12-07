import React from 'react';
import { Route } from 'react-router-dom';
import MovieEdit from './MovieEdit'
 
const MovieShow = ({match, movies}) => {
    console.log(match)
  return (
    <div>
      <h3>{movies[match.params.movieId].title}</h3>
      <Route path={`${match.url}/edit`} render={routerProps => <MovieEdit {...routerProps} movie ={movies[match.params.movieId]}/>}/> 
    </div>
  );
}
 
export default MovieShow;