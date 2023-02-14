import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../Slices/restaurantSlice";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../Slices/basketSlice";
import { XCircleIcon } from "react-native-heroicons/solid";
import Colors from "../constants/Colors";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";

const BasketsScreen = ({ navigation }) => {
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();
  const basketTotal = useSelector(selectBasketTotal);

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-sm">
          <View>
            <Text className="text-lg font-bold text-center">Кошик</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            className="rounded-full bg-gray-100 absolute top-3 right-5"
            onPress={navigation.goBack}
          >
            <XCircleIcon size={45} color={Colors.ascent500} />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Доставити за 30-45 хвилин</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Змінити</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              className="flex-row items-center px-5 bg-white space-x-3 py-2"
              key={key}
            >
              <Text className="text-[#00CCBB]">{items.length} x</Text>
              <Image
                className="h-12 w-12 rounded-full"
                source={{ uri: urlFor(items[0]?.image).url() }}
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text className="text-gray-600">
                <Currency
                  quantity={items[0]?.price * items.length}
                  currency="UAH"
                />
              </Text>
              <TouchableOpacity
                onPress={() => dispatch(removeFromBasket({ id: key }))}
              >
                <Text className="text-[#00CCBB]">Вилучити</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className="bg-white p-5 mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Вартість страв</Text>
            <Text className="text-gray-400">
              <Currency quantity={basketTotal} currency="UAH" />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Вартість доставки</Text>
            <Text className="text-gray-400">
              <Currency quantity={50} currency="UAH" />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="font-extrabold">Загальна вартість замовлення</Text>
            <Text className="font-extrabold">
              <Currency quantity={basketTotal + 50} currency="UAH" />
            </Text>
          </View>
          <TouchableOpacity
            className="rounded-lg bg-[#00CCBB] p-4"
            onPress={() => navigation.navigate("PrepearingOrder")}
          >
            <Text className="text-center text-lg font-bold text-white">
              Замовити
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketsScreen;
