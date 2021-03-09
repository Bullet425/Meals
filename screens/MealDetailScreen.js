import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/CustomHeaderButton";
import { toggleFavorite } from "../store/actions/mealsAction";

export const screenOptions = () => {
  return {
    headerTitle: "Details",
  };
};

const MealDetailScreen = ({ navigation, route }) => {
  const availableMeals = useSelector(state => state.meals.meals);

  const mealId = route.params.mealId;

  const currentMealFavorite = useSelector(state =>
    state.meals.favoriteMeals.some(meal => meal.id === mealId)
  );

  const mealDetail = availableMeals.find(meal => meal.id === mealId);

  const dispatch = useDispatch();

  const favoriteButton = () => {
    dispatch(toggleFavorite(mealId));
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Favorite"
            iconName={currentMealFavorite ? "ios-star" : "ios-star-outline"}
            onPress={favoriteButton}
          />
        </HeaderButtons>
      ),
    });
  }, [currentMealFavorite]);

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Image
          style={styles.foodImage}
          source={{
            uri: `${mealDetail.imageUrl}`,
          }}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>{mealDetail.title}</Text>
          <Text style={styles.headerText}>{mealDetail.price}</Text>
        </View>
        <View style={styles.ingredientsTitleContainer}>
          <Text style={styles.ingredientsTitle}>Ingredients</Text>
        </View>
        {mealDetail.ingredients.map(detail => (
          <View style={styles.detailsContainer} key={detail}>
            <Text style={styles.details}>{detail}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  foodImage: {
    height: 180,
    width: Dimensions.get("window").width / 1,
  },
  headerTextContainer: {
    flexDirection: "row",
    backgroundColor: "#000",
    width: "100%",
    justifyContent: "space-around",
    padding: 8,
  },
  headerText: {
    fontSize: 20,
    color: "#fff",
  },
  ingredientsTitleContainer: {
    borderBottomWidth: 4,
    marginBottom: 15,
    width: "70%",
  },
  ingredientsTitle: {
    padding: 15,
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
  detailsContainer: {
    borderWidth: 2,
    padding: 10,
    marginVertical: 5,
    width: "50%",
  },
  details: {
    textAlign: "center",
    fontSize: 14,
  },
});

export default MealDetailScreen;
