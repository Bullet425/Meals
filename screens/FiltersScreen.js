import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import Colors from "../constants/Colors";
import { useDispatch } from "react-redux";
import { setFilters } from "../store/actions/mealsAction";

export const screenOptions = navData => {
  return {
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

const FiltersScreen = props => {
  const [isVgetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  const filterVegetarian = newValue => {
    setIsVegetarian(newValue);
  };

  useEffect(() => {
    dispatch(setFilters(isVgetarian));
  }, [isVgetarian]);

  return (
    <View style={styles.screen}>
      <Text style={styles.mainTitle}>Available Filters</Text>
      <View style={styles.switchsContainer}>
        <Text>Vegetarian</Text>
        <Switch
          trackColor={{ true: Colors.secondary }}
          value={isVgetarian}
          onValueChange={newValue => filterVegetarian(newValue)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  mainTitle: {
    fontSize: 20,
    marginVertical: 20,
    fontWeight: "700",
  },
  switchsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});

export default FiltersScreen;
