API key: 08ed529557184d65990d71bee48ba86f


base_url : https://api.rawg.io/api/





let val = e.target.value.toLowerCase();
    console.log('value is' , val);
    setOptionVal(val);
    let filteredGame = catogeriesGame
      .filter((iteam) => {
        //console.log(iteam.genre.toLowerCase());
        return iteam.genre.toLowerCase() === optionVal;
      })
      .map((game) => {
        return (
            <img src={game.thumbnail} alt="image" />
        );
      });
      setFilteredGame(filteredGame);