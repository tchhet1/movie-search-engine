import './movieModal.css';


function MovieModal( props ) {

    if(!props.show) {
        return null;
    }

  return (
    <div className="movie-modal">

        <div id="my-modal" class="modal">

        <div className="modal-content">
            <span className="close" onClick={ props.handleClose }>&times;</span>
            <div className="movie-image">
            <img src = { props.image } width="200px" height="auto" alt= {props.title} />
            </div>
            <div className="movie-title">{ props.title }</div>
            <div className="movie-releasedate">{ props.releaseDate }</div>
        </div>

        </div>
    </div>
  );
}

export default MovieModal;
