function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img
        src={
          movie.Poster === "N/A"
            ? "https://placehold.co/300x400?text=Movie+Poster+Not+Available"
            : movie.Poster
        }
      />
      <div className="movie-info">
        <p className="movie-year">{movie.Year}</p>
        <p className="movie-type">{movie.Type}</p>
        <p className="movie-title">{movie.Title}</p>
      </div>
    </div>
  );
}

export default MovieCard;
