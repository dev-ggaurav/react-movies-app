function Search({ setSearchTerm, searchMovies, searchTerm }) {
  return (
    <div className="search">
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for movies"
      />
      <button alt="search" onClick={() => searchMovies(searchTerm)}>
        Search
      </button>
    </div>
  );
}

export default Search;
