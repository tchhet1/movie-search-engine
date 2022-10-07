import React, { useState, useEffect } from 'react';
import Axios  from 'axios';


function PopularMovies() {

    const url = "https://api.themoviedb.org/3/movie/popular?api_key=29c6212e49ed62a5bd8f2c72cd239af9&language=en-US&page=1"
    const posterUrl = 'https://image.tmdb.org/t/p/original';
    const [popularMovies, setPopularMovies] = useState([]);


    useEffect(()=> {
        Axios.get(url)
        .then((res) => {
            //console.log(res.data.results);
            setPopularMovies(res.data.results);
        })
    },[])

   // console.log(newMovies);

    return (
       
        <div class="popular-movies">
            
        {
             popularMovies.map((movie) => {
                //console.log(movie.title);
                 return (
                   <div className="movie">
                       <div className="movie-image">
                            
                            
                           <img src = { posterUrl.concat(movie.poster_path) } width="200px" height="auto" alt= {movie.title} />
                        </div>
                       <div className="movie-title"> <b>{ movie.title }</b></div>
                        <div className="movie-releaseDate"><b>Release date: </b>{ movie.release_date } </div>
                       
                    </div>
                    
                 )
                
                    
                 
            })
        }
            
        </div>
       
    )
}

export default PopularMovies;