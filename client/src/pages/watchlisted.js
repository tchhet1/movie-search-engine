import react, { useState, useEffect } from 'react';
import Axios from 'axios';
import './watchlisted.css';

function Watchlisted() {
    const[watchlist, setwatchlist] = useState([]);

    
    useEffect(() => {
        Axios.get('http://localhost:3001/movies')
        .then((response) => {
        console.log(response.data)
        setwatchlist(response.data);     
        }); 
    },[])
    

    console.log(watchlist);
    return (
        <div className="watchlisted-container">
            <div className="heading">
                <p>My Watchlist</p>
            </div>
            <div className="movies-container">
            {
                watchlist.map((item) => {
                    return (
                        <div className="movie-data-container">
                             <div className="movie-image">   
                                <img src = { item.imageUrl } width="200px" height="auto" alt= {item.title} />      
                            </div>
                            <div className="movie-title">
                                <b> { item.title } </b>     
                            </div>
                            <div className="movie-year">
                                Release Date: { item.releaseDate }
                            </div>
                            <div className="movie-overview">
                                { item.overview }
                            </div>
                            
                        </div>  
                    )
                })
            }
         </div>   
        </div>
    )
}

export default Watchlisted;