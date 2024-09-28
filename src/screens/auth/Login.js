import { StyleSheet, Text, View ,SafeAreaView, TextInput, Pressable} from 'react-native'
const Login = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-950">
      <View className="flex-1 items-center justify-center">
        <Text className="text-white text-3xl font-[Lato-Bold] tracking-wider">
          Login
        </Text>

        <TextInput className="h-12 w-2/3 bg-gray-100 rounded-md px-3" />
        <TextInput className="h-12 w-2/3 bg-gray-100 mt-2 rounded-md px-3" />
        <Pressable className="mt-4">
            <View className="h-12 w-32 bg-orange-600 justify-center items-center justify-center items-center rounded-xl">
                <Text>Login</Text>
            </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
export default Login
const styles = StyleSheet.create({})