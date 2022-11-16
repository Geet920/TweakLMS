//carousel

import { Image, View, ScrollView, Dimensions } from "react-native";
import React from "react";

const { width } = Dimensions.get("window");
const height = width * 0.5; // 60%

const images = [
  "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/267367/pexels-photo-267367.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const Slider = () => {
  return (
    <View style={{ width, height }}>
      <ScrollView pagingEnabled horizontal style={{ width, height }}>
        {images.map((item, index) => (
          <Image
            key={index}
            source={{ uri: item }}
            style={{ width, height, resizeMode: "contain" }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Slider;
