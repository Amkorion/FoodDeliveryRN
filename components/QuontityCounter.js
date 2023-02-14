import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import Colors from "../constants/Colors";

const QuontityCounter = ({ count, onDecrement, onIncrement }) => {
  return (
    <View className="flex-row pt-3">
      <TouchableOpacity onPress={onDecrement}>
        <MinusCircleIcon
          size={35}
          color={count === 0 ? "gray" : Colors.ascent500}
        />
      </TouchableOpacity>
      <View className="justify-center">
        <Text className="mx-4">{count}</Text>
      </View>
      <TouchableOpacity onPress={onIncrement}>
        <PlusCircleIcon size={35} color={Colors.ascent500} />
      </TouchableOpacity>
    </View>
  );
};

export default QuontityCounter;
