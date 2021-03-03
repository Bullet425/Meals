import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

export const screenOptions = {
  headerTitle: "Meal Categories",
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTintColor: "#000",
};

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() =>
          props.navigation.navigate("meals", { categoryId: itemData.item.id })
        }
      >
        <Text>{itemData.item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    height: 100,
  },
});

export default CategoriesScreen;
