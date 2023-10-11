import axios from "axios";

export const getMovieList = (callback) => {
  axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=a3a22845e640c4d14e12f64c9de1107d"
    )
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
