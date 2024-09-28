import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/main/Home';
import ViewEvent from '../screens/main/ViewEvent';
const Stack = createNativeStackNavigator();
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
    }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ViewEvent" component={ViewEvent} /> 
    </Stack.Navigator>
  )
}
export default HomeStackNavigator
const styles = StyleSheet.create({})