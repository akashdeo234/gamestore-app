import { useEffect } from 'react';
import './App.css';
import Hero from './componets/hero-sec/Hero';
import requests from './requests';
function App() {
  const getAllGames = async () =>{
    try {
      const req = await fetch(requests.allGame);
      const data = await req.json();
      console.log(data.results);
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
    </div>
  );
}

export default App;
