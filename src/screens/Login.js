import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  Alert,
  Image,
  ScrollView,
} from "react-native";
import CheckBox from "expo-checkbox";
import Logo from "../../assets/android/mipmap-xxxhdpi/ic_launcher.png";
import CustomButton from "../component/CustomButton/CustomButton";
import SocialSignInButtons from "../component/SocialSignInButtons/SocialSignInButtons";
import firebase from "firebase/compat/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const Login = ({ navigation }) => {
  // const [agree, setAgree] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* Handle LOGIN automatically if user is currently logged in */
  // useEffect(() => {
  //   onAuthStateChanged((user) => {
  //     if (user) {
  //       navigation.navigate("ROUTES.HOME");
  //     }
  //   });
  // }, []);

  //Login with firebase
  const auth = getAuth();
  const handLog = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Logged in with:", user.email);
        navigation.navigate("ROUTES.HOME");
        // ...
      })
      .catch((error) => alert(error.message));
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <View>
        {/* <Text style={styles.mainHeader}>Login Form </Text> */}
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <View style={styles.inputContainer}>
          {/* <Text style={styles.labels}>Enter your name</Text> */}
          <TextInput
            style={styles.inputStyle}
            autoCapitalize="none"
            placeholder="Enter your email"
            autoCorrect={false}
            value={email}
            onChangeText={(actualData) => setEmail(actualData)}
          />
          {/* <Text style={styles.labels}>Enter your password</Text> */}
          <TextInput
            style={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="password"
            secureTextEntry={true}
            value={password}
            onChangeText={(actualData) => setPassword(actualData)}
          />

          {/* <TextInput
            style={styles.inputStyle}
            placeholder="Email or Phone"
            onChangeText={(email) => this.setState({ email })}
            onBlur={(e) => this.validate()}
          /> */}
        </View>

        <CustomButton text="Sign In" onPress={handLog} />

        <CustomButton
          text="Forgot Password?"
          onPress={() => {
            navigation.navigate("ROUTES.FORGOT_PASSWORD");
          }}
          type="TERTIARY"
        />

        {/* Google Sign in */}
        <SocialSignInButtons />

        {/* REGISTER BUTTON */}
        <CustomButton
          text="Don't have an account? Create one"
          onPress={() => {
            navigation.navigate("ROUTES.SIGNUP");
          }}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 25,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: "capitalize",
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
    lineHeight: 25,
  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontSize: 18,
    color: "#7d7d7d",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
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
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    paddingVertical: 15,
  },
  text: {
    lineHeight: 30,
    marginLeft: 10,
  },
  logo: {
    width: "70%",
    height: 100,
    alignSelf: "center",
  },
});

export default Login;
