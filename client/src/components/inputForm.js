import React, { useState } from 'react';
import Axios from 'axios';
import './inputForm.css';


function InputForm({submitHandler}){

    const [input, setInput] = useState('');

    const url = `https://api.themoviedb.org/3/search/movie/?api_key=29c6212e49ed62a5bd8f2c72cd239af9&query=${input}`;


    const inputHandler = ((e) => {
        setInput(e.target.value);
    });

    const apiCall = ((e) => {
        
        if(!input) {
            alert('Please enter a movie name');
        } else {
            
            Axios.get(url)
                .then((res) => {
                //submitHandler function is in parent component which will receive the data and set it to the variable
                submitHandler(res.data.results);
            })
        }
        
        
        
      });

    

      

    return (
        <div className="input-form">
            <input type="text" placeholder="Search for movies..."  value= { input } onChange= { inputHandler } />            
            <button type="submit" onClick= {() => apiCall()}>Search</button>
        </div>
    )

}

export default InputForm;