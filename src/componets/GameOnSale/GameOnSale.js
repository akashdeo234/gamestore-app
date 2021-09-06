import React, { useContext, useState } from "react";
import "./GameOnSale.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { userContext } from "../../context";
function GameOnSale({ topGames, isShootingGames }) {
  //context

  const { data, setData } = useContext(userContext);

  const addedToFavHandler = (img, name) => {
    alert("added");
    //console.log(img,name);
    setData({ img, name });
  };

  let maxImages = 10;

  return (
    <div className="game-on-sale-sec">
      <div className="container">
        <h1>{!isShootingGames ? "TOP GAMES OF 2021" : "Top Shooting Games"}</h1>
        <div className="row">
          {topGames.map((game, index, id) => {
            const { thumbnail, title } = game;
            if (index < maxImages) {
              return (
                <div className="row-iteam" key={index}>
                  <div style={{ display: "flex" }}>
                    <FavoriteBorderIcon
                      className="heart"
                      onClick={() => addedToFavHandler(thumbnail, title)}
                    />
                  </div>
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
