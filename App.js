import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import MealsReducer from "./store/reducers/meals";
import { ProductsNavigator } from "./navigation/ShopNavigator";

const rootReducer = combineReducers({
  meals: MealsReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    noto: require("./assets/fonts/NotoSansJP-Bold.otf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={() => {}}
      />
    );
  }

  return (
    <Provider store={store}>
      <ProductsNavigator />
    </Provider>
  );
}
