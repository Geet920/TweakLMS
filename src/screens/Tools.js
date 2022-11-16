import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Tutorial from "../component/Tools/Tutorial";
import ChatBot from "../component/Tools/Chatbot/Chatbot";
import { useNavigation } from "@react-navigation/native";

const Tools = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        <Text style={{ padding: 10, fontWeight: "bold", fontSize: 25 }}>
          Video Tutorial
        </Text>
      </View>

      <Tutorial />
      <TouchableOpacity onPress={() => navigation.navigate("ROUTES.CHATBOT")}>
        <View style={styles.cardContainer}>
          <Text style={{ padding: 10, fontWeight: "bold", fontSize: 25 }}>
            Chat
          </Text>
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
export default Tools;
