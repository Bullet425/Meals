import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import CustomHeaderButton from "../components/CustomHeaderButton";

export const screenOptions = ({ navigation }) => {
  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  };
};

const FavoritesScreen = props => {
  const availableMeals = useSelector(state => state.meals.favoriteMeals);

  const mealDetails = data => {
    props.navigation.navigate("details", { mealId: data.id });
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
      <FlatList data={availableMeals} renderItem={renderMeals} />
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

export default FavoritesScreen;
