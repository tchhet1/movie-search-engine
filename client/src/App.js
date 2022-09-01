import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Movies from './components/movies';

//https://api.themoviedb.org/3/movie/550?api_key=29c6212e49ed62a5bd8f2c72cd239af9
//https://www.themoviedb.org/documentation/api
function App() {

  return (
    <div className="App">
    {/* check navbar.js to maky any changes to header/navbar */}
     <Navbar /> 

     <Hero />
    </div>
  );
}

export default App;
