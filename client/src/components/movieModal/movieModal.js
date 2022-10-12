import './movieModal.css';
import Genre from '../genre/genre';


function MovieModal( props ) {

  const close = () => {
      props.hideModal(false);
  }

  console.log(props);
  return (
    <div className="movie-modal">

        <div id="my-modal" className="modal">

        <div className="modal-close" >
                <button className="close" onClick={ close }>&times;</button>
            </div>                             
        <div className="modal-content">   
            
            <div className="movie-image">
                <img src = { props.image } width="200px" height="auto" alt= {props.title} />
            </div>
            <div className="modal-body">
                <div className="movie-title"><b>{ props.title }</b></div>
                
                <div className="movie-releasedate"><b>Release date:</b> { props.releaseDate }</div>

                <Genre id = { props.genreIds }></Genre>
                
                <div className="movie-overview"><b>Overview:</b> { props.overview }</div>
            </div>

           

        </div>

        </div>
    </div>
  );
}

export default MovieModal;
