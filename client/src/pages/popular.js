import PopularMovies from '../components/popularMovies';
import './popular.css';
import { GrNext } from 'react-icons/gr';
import { GrPrevious } from 'react-icons/gr';

function Popular() {


    return (
        <div className="popular-movies-container">
            <div className="heading">
                <p>Popular Movies</p>
            </div>
            <div class="leftIcon"><GrPrevious /></div>
            <div class="rightIcon"><GrNext  /></div>
            <PopularMovies></PopularMovies>

        </div>
    )
}

export default Popular;