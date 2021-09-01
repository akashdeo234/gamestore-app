import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import GameOnSale from './componets/GameOnSale/GameOnSale';
import Hero from './componets/hero-sec/Hero';
import TopGamesCarousel from './componets/TopGamesCarousel/TopGamesCarousel';
import requests from './requests';
function App() {
  //loading for fecth
  const [isLoading,setIsLoading] = useState(true);
  //state to store all games
  const [allGames,setAllGames] = useState([]);
  //Getting all games details
  const getAllGames = async () =>{
    try {
      const req = await fetch(requests.allGame);
      const data = await req.json();
      setAllGames(data.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getAllGames();
  },[])
 

  return (
    <div className="App">
      <Hero />
     {isLoading ? 'loading' : <TopGamesCarousel  allGames={allGames} />}
    </div>
  );
}


export default App;
