import React, { useState, useEffect } from 'react';
import Axios  from 'axios';
import MovieModal from './movieModal/movieModal';
import MovieHover from './movieHover/movieHover';
import New from '../pages/new';

//https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US

function NewMovies() {

    const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=29c6212e49ed62a5bd8f2c72cd239af9&language=en-US';
    
    
    const posterUrl = 'https://image.tmdb.org/t/p/original';
    const [newMovies, setNewMovies] = useState([]); 
    
    const [show, setShow] = useState(false);

    const [hover, setHover] = useState(false);

    const [hoverItem, setHoverItem] = useState();

    const [modalItem, setModalItem] = useState();

    const [distanceTop, setDistanceTop] = useState();

    const [distanceLeft, setDistanceLeft] = useState();


    
    


    if(hover) {
        const movieContainer = document.getElementsByClassName('movie');
        //movieContainer.style.position = 'relative'; 
        //console.log(movieContainer);
    }


    useEffect(()=> {
        Axios.get(url)
        .then((res) => {
            setNewMovies(res.data.results);
        })
    },[]);

    const toggleHover = () => {
        console.log('test');
    }
 
    const movieElement = document.getElementsByClassName('movie');

   console.log(distanceTop);
    return (

        <div className="new-movies" >
            
        {
             newMovies.map((movie, index) => {
                 return (
                
                   <div className="movie" 
                   
                        onClick = { () =>{
                            setShow(true);
                            setModalItem(movie);
                        }
                     
                     }
                     
                     
                     onMouseEnter={ () => {
                        setHoverItem(movie);
                        setHover(true);
                        //console.log(movieElement[index]);
                         setDistanceTop(window.scrollY + movieElement[index].getBoundingClientRect().top - 30);
                         setDistanceLeft(window.scrollX + + movieElement[index].getBoundingClientRect().left - 30);
                        
                    } 
                } 
     
                    >
                       <div className="movie-image">   
                            
                           <img src = { posterUrl.concat(movie.poster_path) } width="200px" height="auto" alt= {movie.title} />
                        </div>
                       <div className="movie-title"> <b>{ movie.title }</b></div>
                        <div className="movie-releaseDate"><b>Release date: </b>{ movie.release_date } </div>

                       
                    </div>

                   
                  
                
                    
                 )
                
                    
                 
            })
        }

                    {show && (
                        <MovieModal
                            id = { modalItem.id }
                            title= { modalItem.title }
                            genreIds = { modalItem.genre_ids }
                            releaseDate= { modalItem.release_date}
                            image = { posterUrl.concat(modalItem.poster_path) }
                            overview = { modalItem.overview }
                            hideModal = { setShow }

                        />
                    )
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

export default NewMovies;