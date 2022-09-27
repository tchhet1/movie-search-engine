import react, { useState, useEffect } from 'react';
import Axios from 'axios';
import './watchlisted.css';
import RemoveWatchlisted from '../components/removeWatchlisted';
import PrioritySelection from '../components/prioritySelection';

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
            <div className="watchlisted-movies-container">

            {
                watchlist.map((item) => {
                    return (
                        <div className="movie-data-container" key= {item.id}>
                             <div className="movie-image"> 
                             <RemoveWatchlisted
                             movieID = { item.movieID }
                             movieName = { item.title }> 
                            </RemoveWatchlisted>  
                                <img src = { item.imageUrl } width="200px" height="auto" alt= {item.title} />      
                            </div>

                          
                            <div className="movie-title">
                                <b> { item.title } </b>     
                            </div>
                            <div className="movie-priority">
                                <PrioritySelection
                                movieID = { item.movieID }>
                                </PrioritySelection>
                            </div>
                            <div className="movie-year">
                                Release Date: { item.releaseDate }
                            </div>
                            <div className="movie-overview">
                                <b>Overview:</b> { item.overview }
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