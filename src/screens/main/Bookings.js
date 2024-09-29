import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useFetchBookingsQuery } from "../../features/api/apiSlice";
import EventCard from "../../components/EventCard";

const Bookings = () => {
  const { data, error, isLoading } = useFetchBookingsQuery();
  console.log(data);
  return <SafeAreaView className="flex-1 bg-gray-200">
    <View>
    <Text className="p-3 text-3xl font-[Lato-Bold]">Bookings</Text>

    </View>
    <View>
      {
        data && <FlatList data={data} renderItem={({item})=>{
          return <EventCard item={item}/>
        }}/>
      }
      {
        !data.length && <Text className="text-center text-2xl">No Bookings</Text>
      }
    </View>
  </SafeAreaView>;
};
export default Bookings;
const styles = StyleSheet.create({});
