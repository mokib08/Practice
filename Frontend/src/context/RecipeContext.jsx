import { createContext, useState } from "react"

export const recipecontext = createContext(null)

const RecipeContext = (props) => {

  const [data, setData] = useState([

      {
        "id": 1,
        "title": "Chicken Biryani",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlPQXFO4B201Ry8o7_Soa7dwhJBrtcwJdE0w&s",
        "chef": "Rahim Ahmed",
        "desc": "Spicy and flavorful rice cooked with chicken and aromatic spices.",
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
      {
        "id": 2,
        "title": "Beef Burger",
        "image": "https://www.unileverfoodsolutions.com.au/dam/global-ufs/mcos/ANZ/calcmenu/recipes/NZ-recipes/red-meats-&-red-meat-dishes/beef-burger-with-deep-fried-bacon-and-thousand-island-dressing/main-header.jpg",
        "chef": "Hasan Khan",
        "desc": "Juicy beef patty served with fresh vegetables and cheese.",
        "ingredients": [
          "Beef Patty",
          "Burger Bun",
          "Lettuce",
          "Tomato",
          "Cheese",
          "Onion",
          "Mayonnaise"
        ],
        "time": "30 minutes",
        "difficulty": "Easy"
      },
      {
        "id": 3,
        "title": "Vegetable Pasta",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-SSJCeuOMHXlN5IlA2oT39G758Ed8p0_OXg&s",
        "chef": "Nusrat Jahan",
        "desc": "Healthy pasta mixed with fresh vegetables and sauce.",
        "ingredients": [
          "Pasta",
          "Tomato Sauce",
          "Carrot",
          "Capsicum",
          "Onion",
          "Garlic",
          "Olive Oil"
        ],
        "time": "25 minutes",
        "difficulty": "Easy"
      },
      {
        "id": 4,
        "title": "Chicken Curry",
        "image": "https://www.foodandwine.com/thmb/8YAIANQTZnGpVWj2XgY0dYH1V4I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spicy-chicken-curry-FT-RECIPE0321-58f84fdf7b484e7f86894203eb7834e7.jpg",
        "chef": "Salman Hossain",
        "desc": "Traditional Bangladeshi style chicken curry.",
        "ingredients": [
          "Chicken",
          "Onion",
          "Garlic",
          "Ginger",
          "Turmeric",
          "Chili Powder",
          "Oil"
        ],
        "time": "45 minutes",
        "difficulty": "Medium"
      },
      {
        "id": 5,
        "title": "Fruit Salad",
        "image": "https://www.hipmamasplace.com/wp-content/uploads/2021/06/199259152_166663622165057_6223652316946896551_n.jpg",
        "chef": "Rina Akter",
        "desc": "Fresh and healthy mixed fruit salad.",
        "ingredients": [
          "Apple",
          "Banana",
          "Orange",
          "Grapes",
          "Pineapple",
          "Honey",
          "Lemon Juice"
        ],
        "time": "15 minutes",
        "difficulty": "Easy"
      },
      {
        "id": 6,
        "title": "Egg Fried Rice",
        "image": "https://cdn.sunbasket.com/43c6c3c7-146a-4404-b04a-52750e110e37.jpg",
        "chef": "Imran Ali",
        "desc": "Quick and tasty fried rice with egg and vegetables.",
        "ingredients": [
          "Rice",
          "Egg",
          "Carrot",
          "Peas",
          "Soy Sauce",
          "Garlic",
          "Oil"
        ],
        "time": "20 minutes",
        "difficulty": "Easy"
      },
      {
        "id": 7,
        "title": "Grilled Fish",
        "image": "https://www.licious.in/blog/wp-content/uploads/2022/11/Shutterstock_1017266935-750x750.jpg",
        "chef": "Fahim Rahman",
        "desc": "Spicy grilled fish with lemon flavor.",
        "ingredients": [
          "Fish",
          "Lemon",
          "Garlic",
          "Chili",
          "Salt",
          "Pepper",
          "Olive Oil"
        ],
        "time": "35 minutes",
        "difficulty": "Medium"
      },
      {
        "id": 8,
        "title": "Chocolate Cake",
        "image": "https://stylesweet.com/wp-content/uploads/2022/06/ChocolateCakeForTwo_Featured.jpg",
        "chef": "Tania Islam",
        "desc": "Soft and delicious homemade chocolate cake.",
        "ingredients": [
          "Flour",
          "Cocoa Powder",
          "Sugar",
          "Egg",
          "Butter",
          "Milk",
          "Baking Powder"
        ],
        "time": "50 minutes",
        "difficulty": "Medium"
      },
      {
        "id": 9,
        "title": "Vegetable Soup",
        "image": "https://www.recipetineats.com/tachyon/2017/07/Healthy-Vegetable-Soup.jpg?resize=500%2C375",
        "chef": "Sabbir Ahmed",
        "desc": "Warm and healthy vegetable soup.",
        "ingredients": [
          "Carrot",
          "Potato",
          "Onion",
          "Beans",
          "Garlic",
          "Salt",
          "Pepper"
        ],
        "time": "30 minutes",
        "difficulty": "Easy"
      },
      {
        "id": 10,
        "title": "Chicken Sandwich",
        "image": "https://www.unileverfoodsolutions.us/dam/global-ufs/mcos/NAM/calcmenu/recipes/US-recipes/sandwiches/spicy-mayo-fried-chicken-sandwich/crispychickensandwich_1206x709.jpg",
        "chef": "Arif Hasan",
        "desc": "Crispy chicken sandwich with fresh sauce.",
        "ingredients": [
          "Bread",
          "Chicken",
          "Lettuce",
          "Tomato",
          "Mayonnaise",
          "Cheese",
          "Butter"
        ],
        "time": "20 minutes",
        "difficulty": "Easy"
      }


  ])
 


  return (
    <recipecontext.Provider value={{ data, setData }}>
      {props.children}
    </recipecontext.Provider>
  )
}

export default RecipeContext