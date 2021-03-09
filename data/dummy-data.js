import Category from "../models/category";
import Meal from "../models/meal";

export const CATEGORIES = [
  new Category("c1", "Italian", "#f5428d"),
  new Category("c2", "Spanish", "#f54242"),
  new Category("c3", "Hamburguers", "#f5a442"),
  new Category("c4", "German", "#f5d142"),
  new Category("c5", "Lovely", "#368dff"),
  new Category("c6", "Exotic", "#41d95d"),
  new Category("c7", "Breakfast", "#9eecff"),
  new Category("c8", "Asian", "#b9ffb0"),
  new Category("c9", "French", "#ffc7ff"),
  new Category("c10", "Summer", "#47fced"),
];

export const MEALS = [
  new Meal(
    "m1",
    ["c1", "c2"],
    "Spaguetti",
    "https://dam.cocinafacil.com.mx/wp-content/uploads/2019/12/spaghetti-ala-bolonesa.jpg",
    ["meatballs", "spaguetti", "tomatoes"],
    "60$",
    false
  ),
  new Meal(
    "m2",
    ["c3"],
    "Big Mount Hamburguer",
    "https://www.kingsford.com/wp-content/uploads/2014/11/kfd-howtohamburger-Burgers_5_0391-1024x621.jpg",
    ["bread", "meat", "cheese"],
    "20$",
    false
  ),
  new Meal(
    "m3",
    ["c1", "c3"],
    "Fruit Bowl",
    "https://www.spendwithpennies.com/wp-content/uploads/2019/04/Fruit-Salad-SWP-500x500.jpg",
    ["strawberry", "lettuce", "mango"],
    "40$",
    true
  ),
];
