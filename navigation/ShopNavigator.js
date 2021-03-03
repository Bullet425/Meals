import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen, {
  screenOptions as CategoriesScreenOptions,
} from "../screens/CategoriesScreen";
import CategoryMealsScreen, {
  screenOptions as CategoryMealsScreenOptions,
} from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const ProductsStackNavigator = createStackNavigator();

const defaultOptions = {
  headerStyle: {
    backgroundColor: "#ccc",
  },
};

export const ProductsNavigator = () => {
  return (
    <ProductsStackNavigator.Navigator screenOptions={defaultOptions}>
      <ProductsStackNavigator.Screen
        name="categories"
        component={CategoriesScreen}
        options={CategoriesScreenOptions}
      />
      <ProductsStackNavigator.Screen
        name="meals"
        component={CategoryMealsScreen}
        options={CategoryMealsScreenOptions}
      />
      <ProductsStackNavigator.Screen
        name="details"
        component={MealDetailScreen}
      />
    </ProductsStackNavigator.Navigator>
  );
};
