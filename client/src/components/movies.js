import React, { useState } from 'react';
import './movies.css';
import Watchlist from './watchlist';

function Movies(props) {

    const imageUrl = props.url.concat(props.image);

    
    return (
        
                <div className="movie-data-container">
                    <div className="movie-image">   
                       <Watchlist 
                       movieID = { props.movieID } 
                       image =  { imageUrl } 
                       title = { props.title }
                       releaseDate = {  props.releaseDate }
                       overview = { props.overview }> </Watchlist>

                        <img src = { imageUrl } width="200px" height="auto" alt= {props.title} />
                        
                    </div>
                    
                    <div className="movie-title">
                        
                         <b> { props.title } </b>
                         
                        
                    </div>

                   
                    <div className="movie-year">
                        Release Date: { props.releaseDate }
                    </div>
                    <div className="movie-overview">
                        { props.overview }

                    </div>
                    
                </div>  
    )
     
}

export default Movies;