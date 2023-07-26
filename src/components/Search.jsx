function Search({ setSearchTerm, searchMovies, searchTerm }) {
  return (
    <div className="search">
      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for Movies"
        value={searchTerm}
      />
      <button onClick={() => searchMovies(searchTerm)}>Search</button>
    </div>
  );
}

export default Search;
