import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import GameOnSale from "./componets/GameOnSale/GameOnSale";
import Hero from "./componets/hero-sec/Hero";
import Loading from "./componets/Loading/Loading";
import TopGamesCarousel from "./componets/TopGamesCarousel/TopGamesCarousel";
import requests from "./requests";
function App() {
  //loading for fecth
  const [isLoading, setIsLoading] = useState(true);
  //state to store all games
  const [allGames, setAllGames] = useState([]);

  //state to store only action games
  const [topGames, setTopGames] = useState([]);

  //Getting all games details
  const getAllGames = async () => {
    try {
      const req = await fetch(requests.allGame);
      const data = await req.json();
      setAllGames(data.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  //Getting all action games details starts

  var axios = require("axios").default;

  var options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    params: {'sort-by': 'popularity'},
    headers: {
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      "x-rapidapi-key": "bec2eaff7emsh95e2cb5988556c3p132130jsnf13d234996a1",
    },
  };

  const actionGamesFetch = async () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setTopGames(response.data)
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  };


  //Getting all action games details ends

  useEffect(() => {
    getAllGames();
    actionGamesFetch();
  }, []);

  return (
    <div className="App">
      <Hero />
      {isLoading ? <Loading /> : <TopGamesCarousel allGames={allGames} />}
      {isLoading ? <Loading /> : <GameOnSale topGames={topGames} />}
    </div>
  );
}

export default App;
