import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { height: HEIGHT, width: WIDTH } = Dimensions.get("screen");
const EventCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View
      style={styles.mainContainer}
      className="bg-gray-50 self-center rounded-md mb-2 flex-row"
    >
      <View className="h-full w-full">
        <Image className="h-full w-full " source={{ uri: item.image }} />
      </View>
      <View></View>
    </View>
  );
};
export default EventCard;
const styles = StyleSheet.create({
  mainContainer: {
    height: HEIGHT * 0.15,
    width: WIDTH * 0.9,
  },
});
