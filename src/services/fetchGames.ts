import axios from "axios";
import { Game } from "../GameList";

export const fetchGames = async () : Promise<Game[]> => {
    const res = await axios.get<Game[]>( 'http://localhost:3000/games' )
    console.log(res.data);
    return res.data
}