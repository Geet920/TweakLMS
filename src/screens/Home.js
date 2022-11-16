import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";

import HomeHeader from "../component/Header/Header";

const Home = ({ navigation }) => {
  const description =
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ";

  return (
    <View style={styles.mainContainer}>
      <HomeHeader />

      <View style={{ padding: 10 }}>
        <Image
          style={styles.cardContainer}
          source={require("../../assets/forum.jpg")}
        />
      </View>
      <Text style={styles.paraStyle}>Popular</Text>
      <ScrollView style={{ padding: 10 }}>
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

  titleText: {
    flexDirection: "row",
  },
  title1: {
    fontSize: 19,
    color: "#ffffff",
    marginTop: 30,
    paddingLeft: 15,
    lineHeight: 26,
  },
  title2: {
    fontSize: 19,
    color: "#ffffff",
    marginTop: 30,
    paddingLeft: 15,
    lineHeight: 26,
    textAlign: "right",
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

  homeTop: {
    // height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  headerImage: {
    height: 130,
    width: deviceWidth - 35,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    opacity: 0.9,
    alignContent: "center",
    alignSelf: "center",
  },

  mainHeader: {
    fontSize: 30,
    color: "#344055",
    textTransform: "uppercase",
    // fontFamily: "Nunito_600SemiBold",
  },

  paraStyle: {
    textAlign: "left",
    fontSize: 19,
    color: "#ffffff",
    marginTop: 30,
    paddingLeft: 15,
    lineHeight: 26,
  },

  lineStyle: {
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: "grey",
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "800",
    marginTop: 10,
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

export default Home;
