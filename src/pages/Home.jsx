import { useEffect, useState } from "react";
import GlobalApi from "../api/GlobalApi";
import GamesList from "../components/GamesList";
import GenreList from "../components/GenreList";
import Banner from "../components/Banner";
import Games from "../components/Games";

function Home() {
  const [allGamesList, setAllGamesList] = useState();
  const [gameLists, setGameLists] = useState([]);

  useEffect(() => {
    getGenresGameList();
    getGamesByGenre();
  }, []);

  const getGenresGameList = () => {
    GlobalApi.getGenresGameList.then((res) => {
      setAllGamesList(res.data.results);
    });
    getGamesByGenre(4);
  };

  const getGamesByGenre = (genreId) => {
    console.log("genreId", genreId);

    if (genreId != 0) {
      GlobalApi.getGamesByGenre(genreId).then((res) => {
        setGameLists(res.data.results);
      });
    }
  };

  return (
    <div className="grid grid-cols-4 px-5">
      <div className=" h-full hidden md:block">
        <GenreList 
        // selectedGenreId={(genreId) => getGamesByGenre(genreId)}
         />
      </div>
      <div className="col-span-4 md:col-span-3">
        {allGamesList?.length > 0 && gameLists.length > 0 ? (
          <div className="md:col-span-3 col-span-4 px-3">
            <Banner gameBanner={allGamesList[0]} />
            <GamesList gameList={allGamesList} />
            <Games gameList={gameLists} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
