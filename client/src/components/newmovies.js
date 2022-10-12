import React, { useState, useEffect } from 'react';
import Axios  from 'axios';
import MovieModal from './movieModal/movieModal';
import MovieHover from './movieHover/movieHover';

//https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US

function NewMovies() {

    const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=29c6212e49ed62a5bd8f2c72cd239af9&language=en-US';
    
    
    const posterUrl = 'https://image.tmdb.org/t/p/original';
    const [newMovies, setNewMovies] = useState([]); 
    
    const [show, setShow] = useState(false);

    const [hover, setHover] = useState(false);

    const [hoverItem, setHoverItem] = useState();

    const [modalItem, setModalItem] = useState();

    

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
    },[])

    const toggleHover = () => {
        console.log('test');
    }
 
   // console.log(hoverItem);
    return (

        <div className="new-movies" style={ {position: 'relative', top: 0} }>
            
        {
             newMovies.map((movie) => {
                 return (
                <div id="test" >
                   <div className="movie" onClick = { () =>{
                       setShow(true);
                       setModalItem(movie);
                   }
                     
                     }  
                     onMouseEnter={ (e) => {
                        setHoverItem(movie);
                        setHover(true);
                        e.target.style.position = 'relative';
                        
                    } } 
     
                    style={ {position: 'relative', top: 0} }>
                       <div className="movie-image">   
                            
                           <img src = { posterUrl.concat(movie.poster_path) } width="200px" height="auto" alt= {movie.title} />
                        </div>
                       <div className="movie-title"> <b>{ movie.title }</b></div>
                        <div className="movie-releaseDate"><b>Release date: </b>{ movie.release_date } </div>

                       
                    </div>

                   
                  
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
                        image = { posterUrl.concat(hoverItem.poster_path) }
                        overview = { hoverItem.overview }
                        closeHover = { setHover }
                        ></MovieHover>
                    )

                    }



               
         </div>
            
       
    )
}

export default NewMovies;