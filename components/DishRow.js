import { View, Text, TouchableOpacity, Image } from "react-native";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";
import { useState } from "react";
import QuontityCounter from "./QuontityCounter";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from "../Slices/basketSlice";

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const items = useSelector((state) => selectBasketItemsWithId(state, id));

  const showQountityHandler = () => {
    setIsPressed(!isPressed);
  };

  const incrementHandler = () => {
    setCount((prevCount) => ++prevCount);
  };
  const decrementHandler = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount((prevCount) => --prevCount);
    }
  };

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, image, price }));
  };
  const removeItemFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };

  return (
    <TouchableOpacity
      key={id}
      onPress={showQountityHandler}
      className="bg-white border p-4 border-gray-200"
    >
      <View className="flex-row">
        <View className="flex-1 pr-2">
          <Text className="text-lg mb-1">{name}</Text>
          <Text className="text-gray-400">{description}</Text>
          <Text className="text-gray-400 mt-2">
            <Currency
              quantity={items.length === 0 ? price : price * items.length}
              currency="UAH"
            />
          </Text>
        </View>

        <View>
          <Image
            style={{ borderWidth: 1, borderColor: "#f3f3f4" }}
            className="w-20 h-20 bg-gray-300 p-4"
            source={{ uri: urlFor(image).url() }}
          />
        </View>
      </View>
      {isPressed && (
        <QuontityCounter
          count={items.length}
          onDecrement={removeItemFromBasket}
          onIncrement={addItemToBasket}
        />
      )}
    </TouchableOpacity>
  );
};

export default DishRow;
