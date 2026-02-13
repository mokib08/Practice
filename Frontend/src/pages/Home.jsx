import { useEffect } from "react";
import axios from "../utils/axios"


const Home = () => {

  const getProduct = async () => {
    try {
        const {data} = await axios.get('/products')
        console.log(data);
        
    } catch (error) {
      console.log(error);
      
    }
  }


  useEffect(() => {

    console.log("Home Page Mounded");
    
    getProduct()


    return () => {
      console.log("Home page UnMounded");
      
    }

  }, [])


  return (
    <div>
      <h1>Home page preasent</h1>

    </div>
  )
}

export default Home