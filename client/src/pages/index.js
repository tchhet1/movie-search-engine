import React, { useRef } from 'react';
import Hero from '../components/hero';
import NewMovies from '../components/newmovies';
import '../index.css'
import Popular from './popular';
import { GrNext } from 'react-icons/gr';
import { GrPrevious } from 'react-icons/gr';
import PopularMovies from '../components/popularMovies';


function MainPage() {

    const containerRef = useRef(null);

    const slide = (shift) => {
        containerRef.scrollLeft += shift;
        console.log('here we go');
      };
    
    return (
        <div>
            <Hero />
            <div class="new-movies-homepage">
                <div className="heading">
                    <p>New Movies</p>
                </div>
                <div class="leftIcon" onClick= { slide(-50) }><GrPrevious /></div>
                <div class="rightIcon" onClick= { slide(50) }><GrNext  /></div>
                 <NewMovies></NewMovies>
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