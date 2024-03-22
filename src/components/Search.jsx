const Search = ({ value, handleSearch }) => {
  return (
    <div>
        search: <input value={value} onChange={handleSearch} />
    </div>
  )
}

export default Search
