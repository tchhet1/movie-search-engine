

function MovieData(props) {


    return (
        <div class="movie-data-container">
            <div class="movie-title">
                { props.title }
            </div>
            <div class="movie-overview">
                { props.overview }
            </div>
            <div class="movie-year">
                { props.year }
            </div>
        </div>
    )
    
}

export default MovieData;