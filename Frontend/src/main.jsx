
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import RecipeContext from './context/RecipeContext'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <RecipeContext>

        <BrowserRouter>

            <App />
        </BrowserRouter>
    </RecipeContext>

)
