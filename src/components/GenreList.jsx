import { useEffect, useState } from "react";
import GlobalApi from "../api/GlobalApi";
import PropTypes from "prop-types";

function GenreList() {
  const [genresList, setGenresList] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    getGenres({
      // genreId,
    });
  }, []);

  const getGenres = () => {
    GlobalApi.getGenres.then((res) => {
      setGenresList(res.data.results);
    });
  };

  return (
    <div>
      <h1 className="text-[20px] font-bold dark:text-white">Genre List</h1>
      {genresList.map((item, index) => (
        <div
          onClick={() => {
            setActiveGenre(index);
            // genreId(item.id);
          }}
          className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-400
        p-2 group rounded-lg hover:dark:bg-gray-600 
        ${activeGenre == index ? "bg-gray-300 dark:bg-gray-600" : null}`}
          key={item.id}
        >
          <img
            src={item.image_background}
            className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300
            ${activeGenre == index ? "font-bold" : null}}`}
            alt="genre image"
          />
          <h3
            className={`dark:text-white font-[16px] group-hover:font-bold transition-all ease-out duration-300
            ${activeGenre == index ? "scale-105" : null}
          `}
          >
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

GenreList.propTypes = {
  genreId: PropTypes.func.isRequired,
};

export default GenreList;
