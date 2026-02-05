
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import RecipeContext from './context/RecipeContext'


createRoot(document.getElementById('root')).render(

    <RecipeContext>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </RecipeContext>

)
