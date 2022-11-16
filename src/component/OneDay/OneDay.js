import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

const OneDay = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        <Text>OneDay Video </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("ROUTES.QUIZ")}>
        <View style={styles.cardContainer}>
          <Text>OneDay Quiz</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 10,
  },
  cardContainer: {
    margin: 10,
    width: deviceWidth - 35,
    backgroundColor: "#a29bfe",
    height: 200,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
});
export default OneDay;
