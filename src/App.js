import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import GameOnSale from "./componets/GameOnSale/GameOnSale";
import Hero from "./componets/hero-sec/Hero";
import Loading from "./componets/Loading/Loading";
import RacingAndHorror from "./componets/Racing And Horror Games/RacingAndHorror";
import TopGamesCarousel from "./componets/TopGamesCarousel/TopGamesCarousel";
import requests from "./requests";
function App() {
  //loading for fecth
  const [isLoading, setIsLoading] = useState(true);
  //state to store all games
  const [allGames, setAllGames] = useState([]);

  //state to store only top games
  const [topGames, setTopGames] = useState([]);

  //state for Shooting games
  const [catogeriesGame, setCatogeriesGame] = useState([]);

  //group of state for Racing games
  const [racingGames, setRacingGames] = useState([]);

   //group of state for Horror games
   const [horrorGames, setHorrorGames] = useState([]);

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

  //Getting top games details starts

  var axios = require("axios").default;

  var topOptions = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    params: { "sort-by": "popularity" },
    headers: {
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      "x-rapidapi-key": "bec2eaff7emsh95e2cb5988556c3p132130jsnf13d234996a1",
    },
  };

  const actionGamesFetch = async () => {
    axios
      .request(topOptions)
      .then(function (response) {
        //console.log(response.data);
        setTopGames(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  //Getting shooter games details Starts
  var categoryOptions = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    params: { category: "shooter" },
    headers: {
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      "x-rapidapi-key": "bec2eaff7emsh95e2cb5988556c3p132130jsnf13d234996a1",
    },
  };

  const getCategoriesGames = async () => {
    axios
      .request(categoryOptions)
      .then(function (response) {
        // console.log("ddasdas" ,response.data);
        setCatogeriesGame(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  //getting Racing Games

  var racingGameOption = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    params: { category: "racing" },
    headers: {
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      "x-rapidapi-key": "bec2eaff7emsh95e2cb5988556c3p132130jsnf13d234996a1",
    },
  };

const getRacingGames = async () =>{
  axios.request(racingGameOption).then(function (response) {
    //console.log(response.data);
    setRacingGames(response.data)
  }).catch(function (error) {
    console.error(error);
  });
}


// Getting Horror Games 

var horrorGamesOption = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  params: {category: 'horror'},
  headers: {
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    'x-rapidapi-key': 'bec2eaff7emsh95e2cb5988556c3p132130jsnf13d234996a1'
  }
};

const getHorrorGames = async () =>{
  axios.request(horrorGamesOption).then(function (response) {
    //console.log(response.data);
    setHorrorGames(response.data)
  }).catch(function (error) {
    console.error(error);
  });
}


  useEffect(() => {
    getAllGames();
    actionGamesFetch();
    getCategoriesGames();
    getRacingGames();
    getHorrorGames();
  }, []);

  return (
    
    <div className="App">
      <Hero />
      {isLoading ? <Loading /> : <TopGamesCarousel allGames={allGames} />}
      {isLoading ? <Loading /> : <GameOnSale topGames={topGames} />}
      {isLoading ? (
        <Loading />
      ) : (
        <GameOnSale topGames={catogeriesGame} isShootingGames={true} />
      )}
      {isLoading ? <Loading /> : <RacingAndHorror racingGames={racingGames} isRacingGames={true} />}
      {isLoading ? <Loading /> : <RacingAndHorror racingGames={horrorGames} isRacingGames={false} />}
    </div>
  );
}

export default App;
