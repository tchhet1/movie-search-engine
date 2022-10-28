import React, { useState, useEffect } from 'react';
import MovieHover from './movieHover/movieHover';
import Axios  from 'axios';


function PopularMovies() {

    const url = "https://api.themoviedb.org/3/movie/popular?api_key=29c6212e49ed62a5bd8f2c72cd239af9&language=en-US&page=1"
    const posterUrl = 'https://image.tmdb.org/t/p/original';

    const [popularMovies, setPopularMovies] = useState([]);

    const [hover, setHover] = useState(false);

    const [hoverItem, setHoverItem] = useState();

    const [distanceTop, setDistanceTop] = useState();

    const [distanceLeft, setDistanceLeft] = useState();


    useEffect(()=> {
        Axios.get(url)
        .then((res) => {
            //console.log(res.data.results);
            setPopularMovies(res.data.results);
        })
    },[])

    const movieElement = document.getElementsByClassName('movie');

   // console.log(newMovies);

    return (
       
        <div class="popular-movies">
            
        {
             popularMovies.map((movie, index) => {
                //console.log(movie.title);
                 return (
                   <div className="movie" 
                    onMouseEnter={ () => {
                        setHoverItem(movie);
                        setHover(true);
                        //console.log(movieElement[index]);
                        setDistanceTop(window.scrollY + movieElement[index].getBoundingClientRect().top - 30);
                        setDistanceLeft(window.scrollX + + movieElement[index].getBoundingClientRect().left - 30);
                    
                } 
            } >
                       <div className="movie-image">
                            
                            
                           <img src = { posterUrl.concat(movie.poster_path) } width="200px" height="auto" alt= {movie.title} />
                        </div>
                       <div className="movie-title"> <b>{ movie.title }</b></div>
                        <div className="movie-releaseDate"><b>Release date: </b>{ movie.release_date } </div>
                       
                    </div>
                    
                 )
                
                    
                 
            })
        }

                {hover && (
                        <MovieHover 

                        title= { hoverItem.title }
                        releaseDate= { hoverItem.release_date}
                        genreIds = { hoverItem.genre_ids }
                        image = { posterUrl.concat(hoverItem.poster_path) }
                        overview = { hoverItem.overview }
                        closeHover = { setHover }
                        hoverTop = { distanceTop }
                        hoverLeft = { distanceLeft }
                        ></MovieHover>
                    )

                }
            
        </div>
       
    )
}

export default PopularMovies;