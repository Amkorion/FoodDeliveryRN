import { Image, Text, TouchableOpacity, View } from "react-native";
import { urlFor } from "../sanity";

const BasketItem = ({ name, price, quantity, image }) => {
  return (
    <View className="top-20 flex-row justify-around bg-white p-2 border border-gray-300">
      <View className="justify-center">
        <Text className="color-[#00ccbb]">{quantity}x</Text>
      </View>
      <Image
        className="h-12 w-12 bg-gray-300 p-4 rounded-full"
        source={{ uri: urlFor(image).url() }}
      />
      <View className="justify-center">
        <Text>{name}</Text>
      </View>
      <View className="justify-center">
        <Text>{price}</Text>
      </View>
      <TouchableOpacity className="justify-center">
        <Text className="color-[#00ccbb]">Вилучити</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketItem;
