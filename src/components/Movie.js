function Movie(props) {
    const srcOfImage = 'https://image.tmdb.org/t/p/w342' + props.movieobj.poster_path;
    return (
        <div className="card">
            <img src={srcOfImage} alt=""/>
            <h3 className="movie-title">{props.movieobj.title}</h3>
            <p className="movie-overview">{props.movieobj.overview}</p>
            <button type="button" onClick={() => props.deleteFunction(props.movieobj.id)}>Delete me</button>
        </div>
    );
}

export default Movie;