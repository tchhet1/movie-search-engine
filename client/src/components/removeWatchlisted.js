import React from 'react';
import Axios from 'axios';

function RemoveWatchlisted(props) {

    const watchlistHandler = (e) => {
        //console.log(e.target);

        Axios.delete(('http://localhost:3001/'), {
            data: {movieID: props.movieID}
        })
        .then((response) => {
            alert(`Successfully removed from the watchlist: ${ props.movieName}`);
        })

    }
    
    return (
        <p className="watchlist" onClick = { watchlistHandler }> Remove from watchlist</p>
    )
}

export default RemoveWatchlisted