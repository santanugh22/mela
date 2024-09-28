import "./global.css";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";

import MainNavigation from "./src/navigators/MainNavigation";
const Main = () => {
  return (
    <View className="flex-1">
      <MainNavigation />
    </View>
  );
};
export default Main;
