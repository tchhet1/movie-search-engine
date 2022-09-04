import './App.css';
import Navbar from './components/navbar';
import Movies from './components/movies';
import MainPage from './pages/index';
import Popular from './pages/popular';
import New from './pages/new';
import Watchlisted from './pages/watchlisted';

import {
  BrowserRouter,
  Route,
  Routes,
  Link, 
  Redirect
} from "react-router-dom";


//https://api.themoviedb.org/3/movie/550?api_key=29c6212e49ed62a5bd8f2c72cd239af9
//https://www.themoviedb.org/documentation/api
function App() {

  return (
    <div className="App">
      {/* check navbar.js to maky any changes to header/navbar */}
      <Navbar /> 
      

      <Routes>
      
            <Route exact path="/" element={<MainPage />} /> 
            <Route path="/new" element={<New />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/watchlisted" element={<Watchlisted />} /> 
           
      </Routes>
    </div>
  );
}

export default App;
