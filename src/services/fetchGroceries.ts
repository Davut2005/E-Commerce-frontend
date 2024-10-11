import axios from "axios";
import { Grocery } from "../GroceriyList";

export const fetchGroceries = async () : Promise<Grocery[]> => {
    const res = await axios.get<Grocery[]>( 'http://localhost:3000/groceries' )
    console.log(res.data);
    return res.data
}