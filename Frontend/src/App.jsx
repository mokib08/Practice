import Navbar from "./components/Navbar"
import Mainroute from "./routes/Mainroute"



const App = () => {
  return (
    <div className='py-10 px-[10%] w-screen  bg-gray-800 text-white font-thin'>
      <Navbar />
      <Mainroute />
    </div>
  )
}

export default App