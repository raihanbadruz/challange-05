import axios from "axios";
import { toast } from "react-toastify";

export const getMovieList = async () => {
  try {
    const token = localStorage.getItem("token");

    await axios.get("https://shy-cloud-3319.fly.dev/api/v1/movie/popular", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};
