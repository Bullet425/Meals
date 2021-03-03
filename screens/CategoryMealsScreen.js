import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

export const screenOptions = navData => {
  headerTitle: navData.navigation.title;
};

const CategoryMealsScreen = props => {
  useEffect(() => {
    props.navigation.setOptions({
      title: selectedCategory.title,
    });
  });

  const categoryId = props.route.params.categoryId;

  const selectedCategory = CATEGORIES.find(item => {
    return item.id === categoryId;
  });

  return (
    <View style={styles.screen}>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Change Screen"
        onPress={() => props.navigation.navigate("details")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
