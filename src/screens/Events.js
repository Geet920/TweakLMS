import { Image, View, ScrollView, Dimensions, StyleSheet } from "react-native";
import React from "react";

const { width } = Dimensions.get("window");
const height = width * 0.5; // 60%

const images = [
  "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/267367/pexels-photo-267367.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const Events = () => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={{ padding: 10 }}>
        <View style={styles.cardContainer}>
          <Image
            style={styles.headerImage}
            source={require("../../assets/course.jpg")}
          />
        </View>
        <View style={styles.cardContainer}>
          <Image
            style={styles.headerImage}
            source={require("../../assets/course.jpg")}
          />
        </View>
        <View style={styles.cardContainer}>
          <Image
            style={styles.headerImage}
            source={require("../../assets/course.jpg")}
          />
        </View>
        <View style={styles.cardContainer}>
          <Image
            style={styles.headerImage}
            source={require("../../assets/course.jpg")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get("window").width);
const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    backgroundColor: "#2B32B2aa",
  },
  cardContainer: {
    margin: 10,
    width: deviceWidth - 35,
    backgroundColor: "#a29bfe",
    height: 200,
    borderRadius: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  headerImage: {
    height: "100%",
    width: deviceWidth - 35,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    borderRadius: 20,
    opacity: 0.9,
    alignContent: "center",
    alignSelf: "center",
  },
});
export default Events;
