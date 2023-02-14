import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import client from "../sanity";

import CategoryCard from "./CategoryCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "category"] `).then((response) => {
      setCategories(response);
    });
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={category.image}
          title={category.title}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
