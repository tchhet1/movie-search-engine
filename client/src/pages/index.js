import React, { useRef } from 'react';
import Hero from '../components/hero';
import '../index.css';
import './index.css';
import Popular from './popular';
import  { useState, useEffect } from 'react';
import Axios from 'axios';
import { GrNext } from 'react-icons/gr';
import { GrPrevious } from 'react-icons/gr';
import PopularMovies from '../components/popularMovies';


function MainPage() {

    const [newMovies, setNewMovies] = useState([]);
    
    const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=29c6212e49ed62a5bd8f2c72cd239af9&language=en-US';

    const posterUrl = 'https://image.tmdb.org/t/p/original';


    const containerRef = useRef();

    const slide = (shift) => {
        console.log('hello');
        containerRef.current.scrollLeft += shift;
        
      };


      useEffect(()=> {
        Axios.get(url)
        .then((res) => {
            setNewMovies(res.data.results);
        })
    },[]);
    
    return (
        <div>
            <Hero />

            <div class="new-movies-homepage">
                <div className="heading">
                    <p>New Movies</p>
                </div>
                <div className="leftIcon" onClick= { () => slide(-150) }><GrPrevious /></div>
                <div className="rightIcon" onClick= { () => slide(150)}><GrNext  /></div>
                 <div className="new-movie-container" ref={ containerRef }>
                {
                 newMovies.map((movie, index) => {
                    return (
                
                   <div className="new-movie">
                       <div className="new-movie-image">   
                            
                           <img src = { posterUrl.concat(movie.poster_path) } width="200px" height="auto" alt= {movie.title} />
                        </div>
                       <div className="new-movie-title"> <b>{ movie.title }</b></div>
                        <div className="new-movie-releaseDate"><b>Release date: </b>{ movie.release_date } </div>

                       
                    </div>
                    
                 )
          
            })
        }

            </div>
        </div>
            
            <div className="popular-movies-homepage">
                <div className="heading">
                    <p>Popular Movies</p>
                </div>
                <div class="leftIcon"><GrPrevious /></div>
                <div class="rightIcon"><GrNext  /></div>
                <PopularMovies></PopularMovies>
            </div>
        </div>
    )
}

export default MainPage;