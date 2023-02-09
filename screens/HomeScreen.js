import { useLayoutEffect } from "react";
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

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
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
            <ChevronDownIcon size={28} color="#00ccbb" />
          </Text>
        </View>
        <UserIcon size={35} color="#00ccbb" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput placeholder="Ресторани та кафе" />
        </View>
        <AdjustmentsHorizontalIcon color="#00ccbb" />
      </View>

      {/* Body  44:39*/}
      <ScrollView className="bg-gray-100 mb-20">
        {/* Categories */}

        <Categories />

        {/* Featured */}
        <FeaturedRow
          title="Обране"
          description="Пропозиції від партнерів"
          id="a1"
        />

        {/* Tasty discounts */}
        <FeaturedRow
          title="Смачнючі Знижки"
          description="Найкращі пропозиції тижня"
          id="b2"
        />

        {/* Offers near you */}
        <FeaturedRow
          title="Пропозиції поряд з Вами"
          description="Спробуйте місцеву кухню"
          id="c3"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
