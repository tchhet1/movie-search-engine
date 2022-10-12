import React, { useState, useEffect } from 'react';
import Axios  from 'axios';
import './new.css';
import NewMovies from '../components/newmovies';
import Genre from '../components/genre/genre';
//https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US

function New() {
     
   
    

    return (
        <div className="new-movies-container">
            <div className="heading">
                <p>New Releases</p>
            </div>
            <div className = "new-movies-slider" id="slider" >
                         
                <NewMovies></NewMovies>

                
            </div>      
        </div>
    )
}

export default New;