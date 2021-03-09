import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";
import CustomHeaderButton from "../components/CustomHeaderButton";

export const screenOptions = navData => {
  return {
    headerTitle: "Meal Categories",
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: "#000",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  };
};

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          ...styles.gridItem,
          ...{ backgroundColor: item.color },
        }}
        onPress={() => navigation.navigate("meals", { categoryId: item.id })}
      >
        <View style={styles.gridTexContainert}>
          <Text style={styles.gridText}>{item.title}</Text>
        </View>
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
    padding: 15,
    margin: 10,
    height: 150,
    borderWidth: 2,
    borderRadius: 10,
  },
  gridTexContainert: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  gridText: {
    fontSize: 16,
    fontFamily: "noto",
  },
});

export default CategoriesScreen;
