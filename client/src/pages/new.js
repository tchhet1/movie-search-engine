import React, { useState, useEffect } from 'react';
import Axios  from 'axios';
import './new.css';
import NewMovies from '../components/newmovies';
import Movies from '../components/movies';
import MovieModal from '../components/movieModal/movieModal';

//https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US

function New() {
    // const containerRef = React.createRef;

    // const slide = (shift) => {
    //     containerRef.scrollLeft += shift;
    //     console.log('here we go');
    //   };

   

    return (
        <div className="new-movies-container">
            <div className="heading">
                <p>New Releases</p>
            </div>
            <div className = "new-movies-slider" id="slider">
                         
                <NewMovies></NewMovies>

                
            </div>      
        </div>
    )
}

export default New;