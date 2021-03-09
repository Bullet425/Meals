import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

import CategoriesScreen, {
  screenOptions as CategoriesScreenOptions,
} from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen, {
  screenOptions as MealDetailScreenOptions,
} from "../screens/MealDetailScreen";
import FavoritesScreen, {
  screenOptions as FavoritesScreenOptions,
} from "../screens/FavoritesScreen";
import FiltersScreen, {
  screenOptions as FiltersScreenOptions,
} from "../screens/FiltersScreen";

const ProductsStackNavigator = createStackNavigator();
const FavoritesStackNavigator = createStackNavigator();
const FiltersStackNavigator = createStackNavigator();
const Tab = createBottomTabNavigator();
const DrawerMenu = createDrawerNavigator();

const defaultOptions = {
  headerStyle: {
    backgroundColor: "#ccc",
  },
  headerBackTitle: "Back",
};

const mealsMenuptions = () => {
  return {
    tabBarLabel: "Meals Menu",
    tabBarIcon: tabInfo => {
      return <Ionicons name="ios-restaurant" size={25} />;
    },
  };
};

const favoritesOptions = () => {
  return {
    tabBarIcon: tabInfo => {
      return <Ionicons name="ios-star" size={25} />;
    },
  };
};

const drawerMenuFiltersOptions = () => {
  return { drawerLabel: "Filters" };
};

export const ProductsNavigator = () => {
  return (
    <NavigationContainer>
      <DrawerMenu.Navigator>
        <DrawerMenu.Screen name="Home" component={TabNavigator} />
        <DrawerMenu.Screen
          name="filters"
          component={FilterStack}
          options={drawerMenuFiltersOptions}
        />
      </DrawerMenu.Navigator>
    </NavigationContainer>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="MealsMenu"
        component={ProductsStack}
        options={mealsMenuptions}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteStack}
        options={favoritesOptions}
      />
    </Tab.Navigator>
  );
};

const ProductsStack = () => {
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
      />
      <ProductsStackNavigator.Screen
        name="details"
        component={MealDetailScreen}
        options={MealDetailScreenOptions}
      />
    </ProductsStackNavigator.Navigator>
  );
};

const FavoriteStack = () => {
  return (
    <FavoritesStackNavigator.Navigator screenOptions={defaultOptions}>
      <FavoritesStackNavigator.Screen
        name="favorites"
        component={FavoritesScreen}
        options={FavoritesScreenOptions}
      />
      <ProductsStackNavigator.Screen
        name="details"
        component={MealDetailScreen}
        options={MealDetailScreenOptions}
      />
    </FavoritesStackNavigator.Navigator>
  );
};

const FilterStack = () => {
  return (
    <FiltersStackNavigator.Navigator screenOptions={defaultOptions}>
      <FiltersStackNavigator.Screen
        name="filters"
        component={FiltersScreen}
        options={FiltersScreenOptions}
      />
    </FiltersStackNavigator.Navigator>
  );
};
