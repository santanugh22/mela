import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useFetchEventsQuery } from "../../features/api/apiSlice";
import { FlatList } from "react-native-gesture-handler";
import EventCard from "../../components/EventCard";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
const Home = () => {
  const { data, error, isError } = useFetchEventsQuery();
  const navigation=useNavigation();

  const bottomHeight = useBottomTabBarHeight();

  return (
    <SafeAreaView className="pt-4 flex-1 bg-gray-200 pb-20">
      <View className="flex-1 ">
        <View className="px-2 flex-row justify-between items-center">
          <View className="">
            <Text className="text-3xl font-[Lato-Bold]  text-orange-500">
              Mela
            </Text>
          </View>
          <View>
            <Pressable onPress={()=>navigation.navigate("SearchPage")}>
              <View className="px-3">
                <Text>
                  <Feather name="search" size={24} />
                </Text>
              </View>
            </Pressable>
          </View>
        </View>

        <View className="mt-7 px-3">
          <View>
            <Text className="text-2xl font-[Lato-Regular]">
              Trending event's
            </Text>
          </View>
          <View className="mt-4">
            {data && (
              <FlatList
                data={data}
                renderItem={({ item }) => {
                  return <EventCard item={item} />;
                }}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: bottomHeight+10 }}
              />
            )}
            {
              isError && <Text>Error fetching data</Text>
            }
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Home;
const styles = StyleSheet.create({});
