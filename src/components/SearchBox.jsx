const SearchBox = ({ searchTerm, setSearchTerm }) => {
  return (
    <input 
        className="block w-5/6 md:w-1/2 h-9 my-8 ps-2 rounded text-center outline-none bg-white shadow-xl" 
        type="text" 
        placeholder="Search Movie" 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)}
    />
  )
}

export default SearchBox