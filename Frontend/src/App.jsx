
import Mainroutes from './routes/Mainroutes'
import Nav from './components/Nav'

const App = () => {
  return (
    <div className='text-white px-[10%] w-screen h-screen bg-gray-800'>
      <Nav />
      <Mainroutes />
    </div>
  )
}

export default App