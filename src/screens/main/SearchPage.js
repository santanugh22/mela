import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useSearchEventsQuery } from "../../features/api/apiSlice";
const SearchPage = () => {
  const navigation = useNavigation();
  const [query, setQuery] = useState("");
  const { data, error, isError } = useSearchEventsQuery(query,{
    skip:query===""
  });
  console.log(data)

  return (
    <SafeAreaView className="flex-1 bg-gray-200">
      <View className="flex-row  gap-x-[30]">
        <View className="justify-center items-center px-3">
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} />
          </Pressable>
        </View>
        <View className="flex-row bg-gray-300 justify-between ml-1 rounded-xl px-1">
          <View className="w-3/4">
            <TextInput
              className="h-14 px-1  placeholder:text-gray-500 font-[Lato-Italic]"
              placeholder="Search"
              value={query}
              onChangeText={(text) => setQuery(text)}
            />
          </View>
          <View className="justify-center items-center -px-3">
            <Text>
              <Ionicons name="search" size={24} />
            </Text>
          </View>
        </View>
      </View>

      <View>

      </View>
    </SafeAreaView>
  );
};
export default SearchPage;
const styles = StyleSheet.create({});
