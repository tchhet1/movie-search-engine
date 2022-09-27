import React, { useState } from 'react';
import Axios from 'axios';

function PrioritySelection(props) {


    const [prioritySelection, setPrioritySelection] = useState('');



    
    const handlePriorityChange = (e) => {
        //console.log(e.target.value);
        setPrioritySelection(e.target.value);
        apiTrigger(e.target.value);
      
    }

    const apiTrigger = ((prioritySelection) => {

        console.log(prioritySelection);

        Axios.post('http://localhost:3001/update', {
            movieID: parseInt(props.movieID),
            priority: prioritySelection
        })
        .then((res)=>{
                console.log(res);
                //setMovieList([...res])                
        })
        .catch((error) => {
            console.log('err ' + error);
          });
    })

    //console.log(prioritySelection);
    return (
        <div>
            <label htmlFor="priority-select">Set Priority:</label>
            <select id="priority-select" onChange={ handlePriorityChange }>
                <option value="">Please choose an option</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
        </div>
    )
}

export default PrioritySelection;