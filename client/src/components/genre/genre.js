import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './genre.css';

function Genre(props) {
    
    const url = "https://api.themoviedb.org/3/genre/movie/list?api_key=29c6212e49ed62a5bd8f2c72cd239af9&language=en-US";
    const [genres, setGenres] = useState([]);
    

    useEffect(() => {
        Axios.get(url)
        .then((res)=> {
            console.log(res.data.genres);
            setGenres(res.data.genres);
        })
    }, [])
        
 
    
     
    console.log(props);
    let i = 0;
    let genreResult = [];
    
    genres.forEach(genre => {
        if(props.id[i] == genre.id){
            genreResult.push(genre.name);
            i++;
        }
    })


    console.log(genreResult);

    return (

        <div className="movie-genre">
            <ul>
            { 
                genreResult.map((element) => {
                    return (
                        <li className="genre"> { element } </li>
                    )
                })
                
            }
            </ul>
        </div>
    )
}

export default Genre;