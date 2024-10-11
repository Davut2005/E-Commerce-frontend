import { useQuery } from "@tanstack/react-query";
import { fetchGames } from "./services/fetchGames";

export interface Game {
    gameId: number;
    name: string;
    img: string;
    price: number;
}

const GameList = () => {

const {data, isLoading, isError} = useQuery<Game[]>( {
  queryKey: ['games'],
  queryFn: () => fetchGames()
});

  return (
    <div>
      <h1>Games</h1>  
      <div>
      {  data?.map( (game: Game) => (
          <div key={game.gameId}>
            <h1>Game {game.gameId}+ {game.name}</h1>
          </div>    
      ))}
      </div>
    </div>
  )
}

export default GameList

/*



      */