import React, { useState, useEffect } from 'react';
import Axios  from 'axios';
import MovieModal from './movieModal/movieModal';

//https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US

function NewMovies() {

    const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=29c6212e49ed62a5bd8f2c72cd239af9&language=en-US';
    const posterUrl = 'https://image.tmdb.org/t/p/original';
    //const imageUrl = posterUrl.concat(props.image);
    const [newMovies, setNewMovies] = useState([]);
    const [show, setShow] = useState(false);
    const [modalItem, setModalItem] = useState();

    useEffect(()=> {
        Axios.get(url)
        .then((res) => {
            //console.log(res.data.results);
            setNewMovies(res.data.results);
        })
    },[])


    const showModal = (e) => {
        setShow(true);
        console.log(e.target);

    }

    const hideModal = () => {
        setShow(false);
        console.log(` ${show} clicked`);
    }

   // console.log(newMovies);

    return (

        <div className="new-movies" >
            
        {
             newMovies.map((movie) => {
                //console.log(movie.title);
                 return (
                <div>
                   <div className="movie" onClick = { showModal } >
                       <div className="movie-image">   
                            
                           <img src = { posterUrl.concat(movie.poster_path) } width="200px" height="auto" alt= {movie.title} />
                        </div>
                       <div className="movie-title"> <b>{ movie.title }</b></div>
                        <div className="movie-releaseDate"><b>Release date: </b>{ movie.release_date } </div>
                       
                    </div>

                    {show && (
                        <MovieModal
                            id = { movie.id }
                            title= { movie.title }
                            releaseDate= { movie.release_date}
                            image = { posterUrl.concat(movie.poster_path) }
                            overview = { movie.overview }
                            show = { show }
                            handleClose = {hideModal}

                        />
                    )
                    }
                  
                </div>
                    
                 )
                
                    
                 
            })
        }

               
         </div>
            
       
    )
}

export default NewMovies;