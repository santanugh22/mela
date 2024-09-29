import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableHighlight,
  TextInput,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { randomUUID } from "expo-crypto";

import { useState } from "react";
import { useMakeBookingMutation } from "../features/api/apiSlice";
const BookingModal = ({ event, visible, setVisible }) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [makeBooking, { isLoading, isSuccess }] = useMakeBookingMutation();
  async function BookTicket() {
    try {
      if (count === 0 || name === "" || email === "") {
        return;
      }
      const uuid = randomUUID();
      await makeBooking({ ...event, quantity: count, name, email });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Modal visible={visible} transparent>
      <View className="flex-1 justify-center items-center ">
        <View className="h-1/3 w-11/12 bg-gray-400 rounded-md ">
          <View className="py-2">
            <Text className="text-center text-xl font-[Lato-Italic]">
              Booking Details
            </Text>
          </View>
          <View className="mt-20">
            <View>
              <TextInput
                placeholder="Name"
                value={name}
                onChangeText={setName}
              />
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View className="flex-row justify-center mt-20">
              <View className="justify-center items-center">
                <Pressable
                  onPress={() => (count > 0 ? setCount(count - 1) : null)}
                >
                  <View className="h-6 w-6 justify-center items-center bg-gray-600 rounded-full">
                    <Text className="text-xl font-[Lato-Bold] text-white">
                      -
                    </Text>
                  </View>
                </Pressable>
              </View>
              <View className="justify-center items-center">
                <Text className="text-3xl">{count}</Text>
              </View>
              <View className="justify-center items-center">
                <Pressable onPress={() => setCount(count + 1)}>
                  <View className="h-6 w-6 justify-center items-center bg-gray-600 rounded-full">
                    <Text className="text-xl font-[Lato-Bold] text-white">
                      +
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
          <View className="flex-row justify-center items-center">
            <TouchableHighlight onPress={() => BookTicket()}>
              <View className="bg-blue-500 rounded-xl px-4 py-2">
                <Text className="text-white">Book</Text>
              </View>
            </TouchableHighlight>

            <TouchableOpacity
              onPress={() => setVisible(false)}
              className="overflow-hidden"
            >
              <View className="border border-red-500 p-2 bg-red-500 rounded-xl">
                <Text className="text-white">Cancel</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default BookingModal;
const styles = StyleSheet.create({});
