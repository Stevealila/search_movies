import { useEffect, useState } from "react"
import SearchBox from "./components/SearchBox"
import DisplayMovies from "./components/DisplayMovies"

const App = () => {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const fetchMovies = async (movie_name) => {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=1b86176b8741579e9b0f5790ef86500b&query=${movie_name}`)
    const data = await res.json()
    setMovies(data.results)
  }

  useEffect(() => {
    fetchMovies(searchTerm)
  }, [searchTerm])

  return (
    <div className="flex flex-col justify-center items-center bg-gray-50">
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <DisplayMovies movies={movies} />
    </div>
  )
}

export default App