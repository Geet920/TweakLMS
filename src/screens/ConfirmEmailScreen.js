import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import CustomButton from "../component/CustomButton/CustomButton";
import SocialSignInButtons from "../component/SocialSignInButtons/SocialSignInButtons";

//placeholder to see if button works
const ConfirmEmailScreen = ({ navigation }) => {
  const [code, setCode] = useState("");

  const onConfirmPressed = () => {
    console.warn("OnConfirmPressed");
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Confirm your email</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter your confirmation code"
        value={code}
        setValue={setCode}
      />

      <CustomButton text="Confirm" onPress={onConfirmPressed} />

      <CustomButton
        text="Resend Code"
        onPress={() => {
          console.warn("Resend Code Pressed");
        }}
        type="SECONDARY"
      />
      <CustomButton
        text="Back to Sign In"
        onPress={() => {
          navigation.navigate("Login");
        }}
        type="TERTIARY"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontSize: 18,
    marginVertical: 10,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#FDB075",
  },
});

export default ConfirmEmailScreen;
