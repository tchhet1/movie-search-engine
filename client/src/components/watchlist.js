import React, { useState } from 'react';
import Axios from 'axios';

function Watchlist(props) {

    //const [movieList, setMovieList] = useState([]);

    const watchlistHandler = (e) => {
        console.log(e.target);

        Axios.post('http://localhost:3001/create', {
            movieID: parseInt(props.movieID),
            imageUrl: props.image,
            title: props.title,
            releaseDate: props.releaseDate,
            overview: props.overview
        })
        .then((res)=>{
                console.log(res);
                //setMovieList([...res])
                
        })
        .catch((error) => {
            console.log('err ' + error);
          });
      
        
    }


    return (
       
        <p className="watchlist" onClick = { watchlistHandler }> + Add to watchlist</p>
    )
}

export default Watchlist;