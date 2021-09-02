import React from "react";
import "./GameOnSale.css";
function GameOnSale({ topGames }) {
  let maxImages = 12;

  return (
    <div className="game-on-sale-sec">
      <div className="container">
        <h1>TOP GAMES OF 2021</h1>
        <div className="row">
          {topGames.map((game, index) => {
            const { thumbnail } = game;
            if (index < maxImages) {
              return (
                <div className="row-iteam">
                  <img src={thumbnail} alt="image" />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default GameOnSale;
