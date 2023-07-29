import axios from "axios";

// eslint-disable-next-line no-undef
const key = process.env.RAWG_API;
const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenres = axiosCreate.get(`/genres?key=${key}`);
const getGenresGameList = axiosCreate.get(`/games?key=${key}`);
const getGamesByGenre = (id) =>
  axiosCreate.get(`/games?key=${key}&genres=${id}`);

export default {
  getGenres,
  getGenresGameList,
  getGamesByGenre,
};
