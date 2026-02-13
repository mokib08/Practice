import React, { createContext, useState } from 'react'

export const recipeContext = createContext(null)

const RecipeContext = ({ children }) => {

    const [data, setData] = useState([
        {
            "id": 1,
            "title": "Chicken Biryani",
            "image": "https://vismaifood.com/storage/app/uploads/public/e12/7b7/127/thumb__1200_0_0_0_auto.jpg",
            "chef": "Rahim Ahmed",
            "description": "Spicy and flavorful rice cooked with chicken and aromatic spices.",
            "ingredients": [
                "Chicken",
                "Basmati Rice",
                "Onion",
                "Garlic",
                "Ginger",
                "Yogurt",
                "Biryani Masala"
            ],
            "time": "60 minutes",
            "difficulty": "Medium"
        },
    ])
console.log(data);

    
    

    return (
        <recipeContext.Provider value={{ data, setData }}>
            {children}
        </recipeContext.Provider>
    )
}

export default RecipeContext