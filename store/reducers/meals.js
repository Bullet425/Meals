import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/mealsAction";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const MealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingMeals = state.favoriteMeals.findIndex(meal => {
        return meal.id === action.mealId;
      });

      if (existingMeals >= 0) {
        const update = [...state.favoriteMeals];
        update.splice(existingMeals, 1);
        return { ...state, favoriteMeals: update };
      } else {
        const meal = state.meals.find(meal => meal.id === action.mealId);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }

    case SET_FILTERS:
      const appliedFilter = action.filters;
      console.log(appliedFilter);
      const updatedFilteredMeals = state.meals.filter(meal => {
        if (appliedFilter) {
          return meal.isVegetarian;
        }
        return state.meals;
      });

      return { ...state, filteredMeals: updatedFilteredMeals };

    default:
      return state;
  }
};

export default MealsReducer;
