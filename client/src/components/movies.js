import React, { useState } from 'react';
import './movies.css';
import Watchlist from './watchlist';

function Movies(props) {

    const imageUrl = props.url.concat(props.image);
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = ((e) => {
        setIsHovering(true);
    });

    
    
    return (
            <div class="test">
                <div onMouseOver = { handleMouseOver } >
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
                        <b>Release Date:</b> { props.releaseDate }
                    </div>
                    {/* <div className="movie-overview">
                        { props.overview }

                    </div> */}
                    
                </div> 
                </div> 

                {/* {isHovering && (
                <div class="movie-quickview">
                 <div className="movie-image">   
                       <Watchlist 
                       movieID = { props.movieID } 
                       image =  { imageUrl } 
                       title = { props.title }
                       releaseDate = {  props.releaseDate }
                       overview = { props.overview }> </Watchlist>

                        <img src = { imageUrl } width="400px" height="auto" alt= {props.title} />
                        
                    </div>
                    <div className="movie-title">   
                         <b> { props.title } </b>      
                    </div>
                    <div className="movie-year">
                        <b>Release Date:</b> { props.releaseDate }
                    </div>
                    <div className="movie-overview">
                        { props.overview }

                    </div>
                </div>
                )} */}
            </div>
    )
     
}

export default Movies;