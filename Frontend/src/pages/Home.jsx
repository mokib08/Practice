import axios from '../utils/axios'
import React from 'react'

const Home = () => {

  const getProduct = async () => {
    try {
      const { data } = await axios.get("/products")
      console.log(data);
      
    } catch (error) {
      console.log(" this is axios error", error);
      
    }
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={getProduct}>Get Data</button>
    </div>
  )
}

export default Home