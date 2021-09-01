import React from "react";
import "./TopGamesCarousel.css";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useState } from "react";

function TopGamesCarousel({ allGames }) {
  // console.log(allGames);

  //carousle cuurent and maxslide value
  const [current, setCurrent] = useState(0);
  let maxSlide = 5;
  const lenght = maxSlide;

  //prev slide function
  const prevSlide = () => {
    setCurrent(current === lenght - 1 ? 0 : current + 1);
  };

  //next slide function
  const nextSlide = () => {
    setCurrent(current === 0 ? lenght - 1 : current - 1);
  };

  return (
    <div className="topGames-carousel-sec">
      <div className="container">
        <ChevronRightIcon className="right-arrow" onClick={nextSlide} />
        <ChevronLeftIcon className="left-arrow" onClick={prevSlide} />
        {allGames.map((game, index) => {
          const { background_image, name, rating } = game;
          if (index < maxSlide) {
            return (
              <div
                className={index === current ? "slide-active" : "slide"}
                key={index}
              >
                {index === current && (
                  <img src={background_image} alt="name" className="image" />
                )}
               {index === current && (
                 <h1 className='slide-title'>{name}</h1>
               )}
               {index === current && (
                 <h4 className='slide-rating'>Rating : {rating}</h4>
               )} 
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default TopGamesCarousel;
