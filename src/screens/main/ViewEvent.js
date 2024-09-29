import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import BookingModal from "../../modals/BookingModal";

const ViewEvent = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const event = route.params.event;
  const [bookmodal, setBookModal] = useState(false);
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-row items-center justify-between">
        <View className="px-2">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} />
          </TouchableOpacity>
        </View>
        <View>
          <Text className="text-md font-[Lato-Italic]">{event.title}</Text>
        </View>
        <View></View>
      </View>
      <View className="justify-center items-center mt-7">
        <View className="h-52 w-full self-center items-center justify-center rounded-2xl overflow-hidden">
          <Image
            source={{ uri: event.image }}
            className="h-52 w-11/12 rounded-2xl "
          />
        </View>

        <View className="p-3  mt-5 ">
          <View>
            <Text className="text-2xl font-[Lato-Italic] mt-4">
              {event.title}
            </Text>
            <Text className="text-lg font-[Lato-Regular] mt-1">
              {event.date}
            </Text>
            <Text className="text-md font-[Lato-Regular] mt-1">
              {event.location}
            </Text>
          </View>
          <View>
            <Text>{event.description}</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => setBookModal(true)}>
            <View className="h-12 w-24 bg-blue-500 rounded-2xl justify-center items-center">
              <Text className="text-white">Book</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <BookingModal visible={bookmodal} setVisible={setBookModal} event={event}/>
    </SafeAreaView>
  );
};
export default ViewEvent;
