import { useQuery } from "@tanstack/react-query";
import { fetchGroceries } from "./services/fetchGroceries";


export interface Grocery {
    groceryId: number;
    name: string;
    price: number;
    imgBuffer?: string;
    imgName?: string;
    imgMimeType: string;
}

const GroceryList = () => {

  const {data, isLoading,isError} = useQuery<Grocery[]>( {
    queryKey: ['groceries'],
    queryFn: () => fetchGroceries()
  } )  

  return (
    <div key={1}>
      { data?.map( (grocery: Grocery) => {
        console.log(grocery);
        
        return (
          <div key={grocery.groceryId}>
            <h1>{grocery.groceryId}: {grocery.name}</h1>
            <img
              src={`data:${grocery.imgMimeType};base64,${grocery.imgBuffer}`}
              alt="not found" 
              className="max-w-[300px]"
            />
          </div> 
        )
      }      
      ) }
    </div>
  )
}

export default GroceryList
