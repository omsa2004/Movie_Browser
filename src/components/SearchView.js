import Hero from "./Hero";
import { Link } from "react-router-dom";
import notfound from "../img/notfound.png";
const MovieCard = ({ movie }) => {
  let posterURL =  notfound;
  if (movie.poster_path !== null) {
     posterURL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  }

  const detailURL = `/movies/${movie.id}`;
  return (
    <div className="col-lg-3 col-md-3 col-2 my-3 d-flex align-items-stretch">
      <div className="card">
        <img
          src={posterURL}
          className="card-img-top"
          alt={movie.original_title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <p className="card-text"></p>
          <Link to={detailURL} className="btn btn-primary">
            Show details
          </Link>
        </div>
      </div>
    </div>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const nothing = `Nothing found for ${keyword}`;
  const title = `You are searching for ${keyword}`;
  const searchHTML = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });
  if (searchHTML.length === 0) {
    searchHTML.push(
      <div>
        <p className="m-5 text-danger h5">{nothing}</p>
      </div>
    );
  }
  const results = searchHTML;
  return (
    <>
      <Hero text={title} />
      {results && (
        <div className="container">
          <div className="row">{results}</div>
        </div>
      )}
    </>
  );
};

export default SearchView;
