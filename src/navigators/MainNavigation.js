import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "./HomeStackNavigator";
import Bookings from "../screens/main/Bookings";
import { NavigationContainer } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="LAYOUT"
          component={HomeStackNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" size={size} color={color} />
            ),
            tabBarLabel: "Home",
            tabBarLabelStyle: {
              fontFamily: "Lato-Regular",
            },
          }}
        />
        <Tab.Screen
          name="BOOKINGS"
          component={Bookings}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="event" size={size} color={color} />
            ),
            tabBarLabel: "Bookings",
            tabBarLabelStyle: {
              fontFamily: "Lato-Regular",
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigation;
const styles = StyleSheet.create({});
