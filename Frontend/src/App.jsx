
import Navbar from "./components/Navbar"
import MainRoutes from "./routes/MainRoutes"


const App = () => {
  return (
    <div className='py-10 px-[10%] w-screen h-screen bg-gray-800 text-white font-thin'>
      <Navbar />
      <MainRoutes />
    </div>
  )
}

export default App