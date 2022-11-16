import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import CustomButton from "../../component/CustomButton/CustomButton";

const ForgotPasswordScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");

  const onSendPressed = () => {
    console.warn("OnConfirmPressed");
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Reset your password</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="username"
        value={username}
        setValue={setUsername}
      />

      <CustomButton
        text="Send"
        onPress={() => {
          navigation.navigate("NewPassword");
        }}
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

export default ForgotPasswordScreen;
