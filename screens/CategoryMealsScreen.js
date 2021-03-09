import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = ({ navigation, route }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: selectedMeal.title,
    });
  });

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const categoryId = route.params.categoryId;

  const selectedMeal = CATEGORIES.find(category => category.id === categoryId);

  const selectedCategory = availableMeals.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );

  const mealDetails = data => {
    navigation.navigate("details", { mealId: data.id });
  };

  const renderMeals = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => mealDetails(item)}>
        <View style={styles.screen}>
          <Image
            style={styles.foodImage}
            source={{
              uri: `${item.imageUrl}`,
            }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.text}>{item.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList data={selectedCategory} renderItem={renderMeals} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
  },
  foodImage: {
    height: 180,
    width: Dimensions.get("window").width / 1.2,
  },
  textContainer: {
    backgroundColor: "#000",
    opacity: 0.9,
    width: Dimensions.get("window").width / 1.2,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
});

export default CategoryMealsScreen;
