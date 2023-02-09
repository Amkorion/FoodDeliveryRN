import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import Colors from "../constants/Colors";
import RestauransCard from "./RestauransCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color={Colors.ascent500} />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestauransCard
          id="dkf2"
          imgUrl="https://links.papareact.com/gn7"
          title="Супер Суші"
          rating={4.5}
          genre="Японська"
          address="Перова, 42"
          short_description="тут буде опис"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestauransCard
          id="dkf2"
          imgUrl="https://links.papareact.com/gn7"
          title="Супер Суші"
          rating={4.5}
          genre="Японська"
          address="Перова, 42"
          short_description="тут буде опис"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestauransCard
          id="dkf2"
          imgUrl="https://links.papareact.com/gn7"
          title="Супер Суші"
          rating={4.5}
          genre="Японська"
          address="Перова, 42"
          short_description="тут буде опис"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
