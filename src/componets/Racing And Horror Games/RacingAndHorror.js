import React, { useContext } from "react";
import "./RacingAndHorror.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { userContext } from "../../context";
function RacingAndHorror({ racingGames, isRacingGames }) {
  //context

  const { data, setData } = useContext(userContext);

  const addedToFavHandler = (img, name) => {
    alert("added");
    //console.log(img,name);
    setData({ img, name });
  };

  let maxImages = 9;
  return (
    <div className="racing-horror-sec">
      <div className="container">
        <h1>{isRacingGames ? "Top Racing Games" : "Top Horror Games"}</h1>
        <div className="row">
          {racingGames.map((game, index) => {
            const { thumbnail, title } = game;
            if (index < maxImages) {
              return (
                <div className="row-iteam" key={index}>
                  <div style={{display:'flex'}}>
                    <FavoriteBorderIcon
                      className="heart"
                      onClick={() => addedToFavHandler(thumbnail, title)}
                    />
                    <p style={{paddingLeft:'5px'}}>Added</p>
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

export default RacingAndHorror;
