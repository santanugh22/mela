import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
const Main = () => {
  return (
    <Provider>
      <View>
        <Text>Main</Text>
      </View>
    </Provider>
  );
}
export default Main
const styles = StyleSheet.create({})