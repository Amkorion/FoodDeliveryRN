import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import { MapIcon, MapPinIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";

const RestauransCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  const pressHandler = () => {
    navigation.navigate("Restaurant", {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    });
  };
  const navigation = useNavigation();
  return (
    <TouchableOpacity className="bg-white mr-3 shadow" onPress={pressHandler}>
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        className="h-36 w-64 rounded-sm overflow-hidden min-h-max min-w-full"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="orange" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            {rating} · {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <MapPinIcon size={22} opacity={0.4} color="gray" />
          <Text className="text-xs text-gray-500">Поряд · {address} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestauransCard;
