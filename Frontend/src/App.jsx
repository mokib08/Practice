
import Nav from './components/Nav'
import MainRoutes from './routes/MainRoutes'

const App = () => {
  return (
    <div className='w-screen h-screen text-white bg-gray-800 px-[10%]'>
      <Nav />
      <MainRoutes/>
    </div>
  )
}

export default App