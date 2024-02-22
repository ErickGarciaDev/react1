import { useEffect, useState } from 'react';
import { GameCards } from '../components/GameCards';
export const Home = () => {
  const user = window.localStorage.getItem('session');
  console.log(user);

  const [games, setGames]: any = useState([]);

  useEffect(() => {
    function loadGames() {
      fetch('http://localhost:3000/games')
        .then((response) => response.json())
        .then((data) => setGames(data));
    }
    loadGames();
  }, []);

  return (
    <>
      <div className="cardsContainer">
        {games &&
          games.map((game: any) => <GameCards key={game.name} props={game} />)}
      </div>
    </>
  );
};
