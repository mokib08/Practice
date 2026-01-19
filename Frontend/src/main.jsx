
import { createRoot } from 'react-dom/client'
import './index.css'
import Wrapper from './Wrapper'
import App from './App'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(

   <Wrapper >
      <App />
      <ToastContainer position='top-center' />
   </Wrapper>

)
