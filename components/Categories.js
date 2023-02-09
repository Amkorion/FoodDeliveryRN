import { View, Text, ScrollView } from "react-native";

import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Item1" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Item2" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Item3" />
    </ScrollView>
  );
};

export default Categories;
