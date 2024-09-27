import "./global.css"
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
const Main = () => {
  return (
    <View className="flex-1 justify-center items-center bg-black">
      <Text className="text-white text-3xl font-[Lato-Regular]">Main</Text>
    </View>
  );
};
export default Main;
const styles = StyleSheet.create({});
