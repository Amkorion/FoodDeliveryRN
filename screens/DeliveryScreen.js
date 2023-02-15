import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../Slices/restaurantSlice";
import { XCircleIcon, XMarkIcon } from "react-native-heroicons/solid";
import Colors from "../constants/Colors";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = ({ navigation }) => {
  const restaurant = useSelector(selectRestaurant);
  return (
    <View className="bg-[#00ccbb] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon size={30} color="white" />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Допомога</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Час доставки</Text>
              <Text className="text-4xl font-bold">30-45 хвилин</Text>
            </View>
            <Image
              className="h-20 w-20"
              source={{ uri: "https://links.papareact.com/fls" }}
            />
          </View>
          <Progress.Bar
            size={30}
            color={Colors.ascent500}
            indeterminate={true}
          />
          <Text className="mt-3 text-gray-500">
            Ваше замовлення у {restaurant.title} готується
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor={Colors.ascent500}
        />
      </MapView>
      <SafeAreaView className="bg-white flex-row items-center h-28 space-x-5">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="font-bold">Павло</Text>
          <Text className="font-light text-gray-400">Ваш курьєр</Text>
        </View>
        <Text className="font-bold text-[#00ccbb] mr-5">Подзвонити</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
