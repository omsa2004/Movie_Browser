import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import notfound from "../img/notfound.png";

const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=39df20a40f86a4c7ab69e94de9655ad9&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setMovieDetails(data);
          setIsLoading(false);
        }, 2000);
      });
  }, [id]);
  function MovieRender() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetails) {
      let posterURL = notfound;
      if (movieDetails.poster_path !== null) {
        posterURL = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`;
      }
      const backdropurl = `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`;

      return (
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropurl} />
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={posterURL}
                  alt={movieDetails.original_title}
                  className="img-fluid shadow rounded"
                />
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <p className="lead">{movieDetails.overview}</p>
                {(movieDetails.homepage !== "") &&
                        <a href={movieDetails.homepage} className="lead">
                        HomePage
                      </a>
                    
                }
                
              </div>
            </div>
          </div>
        </>
      );
    }
  }
  return MovieRender();
};

export default MovieView;
