import { useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import {
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import Colors from "../constants/Colors";
import client from "../sanity";

const HomeScreen = ({ navigation }) => {
  [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "featured"] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
    
      }
    }`
      )
      .then((data) => setFeaturedCategories(data));
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          source={{ uri: "https://links.papareact.com/wru" }}
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">
            Доставити Зараз!
          </Text>
          <Text className="font-bold text-xl">
            Поточна локація
            <ChevronDownIcon size={28} color={Colors.ascent500} />
          </Text>
        </View>
        <UserIcon size={35} color={Colors.ascent500} />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput placeholder="Ресторани та кафе" />
        </View>
        <AdjustmentsHorizontalIcon color={Colors.ascent500} />
      </View>

      {/* Body  44:39*/}
      <ScrollView className="bg-gray-100 mb-20">
        {/* Categories */}

        <Categories />

        {/* Featured */}
        {featuredCategories?.map((category) => (
          <FeaturedRow
            title={category.name}
            description={category.short_description}
            id={category._id}
            key={category._id}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
