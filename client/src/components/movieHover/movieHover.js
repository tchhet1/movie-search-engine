import './movieHover.css';
import Watchlist from '../watchlist';
import Genre from '../genre/genre';

function MovieHover(props) {

    const closeHover = () => {
        console.log('hover leave');
        props.closeHover(false);
    }


    const hoverStyle = {
        position: 'absolute',
        top: props.hoverTop,
        left: props.hoverLeft
    }


    return (
        <div className="hover-effect" onMouseLeave ={ closeHover } style = { hoverStyle }>
            

            <div className="movie-image">
            <Watchlist 
                       movieID = { props.movieID } 
                       image =  { props.image } 
                       title = { props.title }
                       releaseDate = {  props.releaseDate }
                       overview = { props.overview }> 
            </Watchlist>
            
                <img src = { props.image } width="270px" height="auto" alt= {props.title} />
            </div>

            <div className="hover-body">
                <div className="movie-title"><b>{ props.title }</b></div>
                
                <div className="movie-releasedate"><b>Release date:</b> { props.releaseDate }</div>

                <Genre id = { props.genreIds }></Genre>
                
                <div className="movie-overview"><b>Overview:</b> { props.overview }</div>

            </div>

        </div>
    )
}

export default MovieHover;