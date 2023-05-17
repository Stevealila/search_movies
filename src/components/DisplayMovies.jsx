const DisplayMovies = ({ movies }) => {
  return (
        <div className="my-8 w-5/6 md:w-2/3">
        {
            movies.map( movie => (
            <div key={movie.id} className="mb-4 p-2 flex flex-col items-center bg-gray-100 rounded-lg shadow-2xl">
                <h3 className="font-semibold text-2xl">{movie.title}</h3>
                <p className="italic">Release date: {movie.release_date}</p>
                <p className="md:w-1/2 my-2">{movie.overview}</p>
            </div>
            ))
        }
        </div>
  )
}

export default DisplayMovies