import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import React from "react";
import { XCircleIcon } from "react-native-heroicons/solid";
import Colors from "../constants/Colors";
import BasketItem from "../components/BasketItem";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
  selectBasketTotal,
} from "../Slices/basketSlice";
import Currency from "react-currency-formatter";

const BasketScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const items = useSelector(selectBasketItems);
  const total = useSelector(selectBasketTotal);

  const removeItem = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <View className="flex-1 bg-gray-300">
      <View className="pt-3 pb-6 bg-white">
        <Text className="text-lg font-extrabold text-center">Кошик</Text>
        <Text className="text-center text-gray-400">Назва ресторану</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="absolute top-3 right-3  z-50 self-end"
      >
        <XCircleIcon size={45} color={Colors.ascent500} />
      </TouchableOpacity>

      <View className="flex-row bg-white top-6 p-5">
        <Image
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          source={{ uri: "https://links.papareact.com/wru" }}
        />
        <View className="ml-3 justify-center">
          <Text>Доставити через 30-45 хвилин</Text>
        </View>
        <TouchableOpacity className=" justify-center">
          <Text className="text-[#00ccbb] font-semibold ml-9">Змінити</Text>
        </TouchableOpacity>
      </View>
      {items.map((item) => (
        <BasketItem
          key={item.id}
          id={item._id}
          name={item.name}
          price={item.price}
          quantity={items.length}
          image={item.image}
        />
      ))}

      <View className="pt-72">
        <View className="bg-white">
          <View className="flex-row justify-between pr-4 pl-4">
            <Text className="text-gray-400">Вартість страв</Text>
            <Text className="text-gray-400">
              <Currency quantity={total} currency="UAH" />
            </Text>
          </View>
          <View className="flex-row justify-between pr-4 pl-4">
            <Text className="text-gray-400">Вартість доставки</Text>
            <Text className="text-gray-400">
              <Currency quantity={50} currency="UAH" />
            </Text>
          </View>
          <View className="flex-row justify-between pr-4 pl-4">
            <Text className="text-black">Загальна вартість замовлення</Text>
            <Text>
              <Currency quantity={total + 50} currency="UAH" />
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BasketScreen;
