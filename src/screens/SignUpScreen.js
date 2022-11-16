import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import CustomButton from "../component/CustomButton/CustomButton";
import SocialSignInButtons from "../component/SocialSignInButtons/SocialSignInButtons";
import firebase from "firebase/compat/app";

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((error) => alert(error.message));
  };

  const onRegisterPressed = () => {
    console.warn("OnRegisterPressed");
  };
  const onTermsofUsePressed = () => {
    console.warn("OnTermsofUsePressed");
  };
  const onPrivacyPolicyPressed = () => {
    console.warn("OnPrivacyPolicyPressed");
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Create an account</Text>
      {/* <TextInput
        style={styles.inputStyle}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      /> */}
      <TextInput
        style={styles.inputStyle}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      {/* <TextInput
        style={styles.inputStyle}
        placeholder="Confirm password"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry
      /> */}
      <CustomButton
        text="Register"
        // onPress={() => {
        //   navigation.navigate("ConfirmEmail");
        // }}
        onPress={handleSignUp}
      />

      <Text style={styles.text}>
        By registering, you confirm that you accept our
        <Text style={styles.link} onPress={onTermsofUsePressed}>
          {" "}
          Terms of Use
        </Text>{" "}
        and
        <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
          {" "}
          Privacy Policy
        </Text>
      </Text>
      <SocialSignInButtons />

      <CustomButton
        text="Have an account? Sign In"
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

export default SignUpScreen;
