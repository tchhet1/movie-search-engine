import './movieHover.css';

function MovieHover(props) {

    const closeHover = () => {
        console.log('hover leave');
        props.closeHover(false);
    }
    return (
        <div className="hover-effect" onMouseLeave ={ closeHover }>
            <div className="movie-image">
            
                <img src = { props.image } width="250px" height="auto" alt= {props.title} />
            </div>

            <div className="hover-body">
                <div className="movie-title"><b>{ props.title }</b></div>
                
                <div className="movie-releasedate"><b>Release date:</b> { props.releaseDate }</div>

                
                
                <div className="movie-overview"><b>Overview:</b> { props.overview }</div>
            </div>

        </div>
    )
}

export default MovieHover;