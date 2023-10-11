import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

function Detail() {
  const [movies, setMovies] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=5a1a8d073c4a8515a69dc7913d6f19ad`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data);
        console.log(data);
      });
  }, [id]);

  return (
    <div className="wrapper">
      <img
        src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`}
        alt=""
        className="image-detail"
      />
      <div className="card-detail m-5">
        <div className="row g-0">
          <div className="col-md-2">
            <img
              src={`https://image.tmdb.org/t/p/w200${movies.poster_path}`}
              className="img-fluid rounded-start border border-danger-subtle"
              alt="..."
            />
          </div>
          <div className="col-md">
            <div className="card-body">
              <h1 className="card-title">{movies.original_title}</h1>
              <p className="card-text">{movies.overview}</p>
              <p className="card-text">Tagline : {movies.tagline}</p>
              <p className="card-text">
                Site : <a href={movies.homepage}>{movies.homepage}</a>
              </p>
              <p className="card-text">Popularity : {movies.popularity}</p>
              <p className="card-text">Budget : ${movies.budget}</p>
              <p className="card-text">Revenue : ${movies.revenue}</p>
              <p className="card-text">
                <small className="">Release Date : {movies.release_date}</small>
              </p>
            </div>
          </div>
        </div>
        <Link to={`/`}>
          <button type="button" className="btn btn-success">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Detail;
