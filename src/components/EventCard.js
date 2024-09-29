import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const EventCard = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ViewEvent", { event: item })}
      className="bg-gray-50 self-center rounded-md mb-4 p-4 flex-row "
    >
      <Image
        className="h-24 w-24 rounded-md"
        source={{ uri: item.thumbnail }}
      />
      <View className="ml-4 flex-1">
        <Text className="text-xl  text-gray-800 font-[Lato-Italic]">
          {item.title}
        </Text>
        <Text className="text-md text-gray-700 font-[Lato-Regular]">
          {item.date}
        </Text>
        <Text className="text-sm text-gray-700 font-[Lato-Regular]">
          {item.location}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;
