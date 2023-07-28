// import React from 'react'

import { useEffect, useState } from "react";
import GlobalApi from "../api/GlobalApi";
import GamesList from "../components/GamesList";
import GenreList from "../components/GenreList";
import Banner from "../components/Banner";

function Home() {
  const [allGamesList, setAllGamesList] = useState();
  useEffect(() => {
    getGenresGameList();
  }, []);

  const getGenresGameList = () => {
    GlobalApi.getGenresGameList.then((res) => {
      setAllGamesList(res.data.results);
    });
  };

  return (
    <div className="grid grid-cols-4 px-5">
      <div className=" h-full hidden md:block">
        <GenreList />
      </div>
      <div className="col-span-4 md:col-span-3">
        {allGamesList?.length > 0 ? 
        <div>
          <Banner gameBanner={allGamesList[0]} />
          <GamesList gameList={allGamesList}  />
        </div>
         : null}
        
      </div>
    </div>
  );
}

export default Home;
