import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    movies && (
      <div className=" text-white p-4">
        <h1 className="text-2xl font-semibold  p-6 ">{title}</h1>
        <div className=" flex overflow-x-scroll scrollbar">
          <div className="flex">
            {movies &&
              movies.map((movie) => (
                <MovieCard
                  poster={movie.poster_path}
                  title={movie.title}
                  key={movie.id}
                />
              ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
