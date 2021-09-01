import React from "react";
import "./GameOnSale.css";
function GameOnSale({ actionGames }) {
  
  return (
    <div className="game-on-sale-sec">
      <div className="container">
        <h1>Games On Sale</h1>
        <div className="row">
          {actionGames.map((game)=>{
            const { background_image,} = game;
            console.log(game)
            return(
              <div className='row-iteam'>
                <img src={background_image} alt="game image" /> 
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default GameOnSale;
