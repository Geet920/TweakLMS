import {
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../../../config";
import firebase from "firebase/compat/app";
import { useNavigation } from "@react-navigation/native";

const PhoneLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [verficationId, setVerificationId] = useState("");
  const recapchaVerifier = useRef(null);
  const navigation = useNavigation();

  const sendVerification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recapchaVerifier.current)
      .then(setVerificationId);
    setPhoneNumber("");
  };

  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verficationId,
      code
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then(() => {
        setCode("");
      })
      .catch((error) => {
        alert(error);
      });
    Alert.alert("Login Success");
    navigation.navigate("ROUTES.HOME");
  };

  // const onChangePhone = (number) => {
  //   setPhoneNumber(number);
  // };

  const onPressContinue = () => {
    navigation.navigate("ROUTES.OTP");
  };

  return (
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recapchaVerifier}
        firebaseConfig={firebaseConfig}
      />

      {/* <KeyboardAvoidingView
        keyboardVerticalOffset={50}
        behavior={"padding"}
        style={styles.containerAvoidingView}
      > */}
      <Text style={styles.textTitle}>{"Enter your mobile number"}</Text>
      {/* <View style={styles.containerInput}> */}
      {/* <View style={styles.openDialogView}>
            <Text>{"+91 |"}</Text>
          </View> */}
      <TextInput
        style={styles.phoneInputStyle}
        placeholder="1234567890"
        keyboardType="phone-pad"
        // value={phoneNumber}
        onChangeText={setPhoneNumber}
        secureTextEntry={false}
      />
      <TouchableOpacity
        style={styles.sendVerification}
        onPress={sendVerification}
      >
        <Text style={styles.buttonText}>Send Verification</Text>
      </TouchableOpacity>
      {/* </View> */}
      {/* <View style={styles.viewBottom}>
        <TouchableOpacity onPress={sendVerification}>
          <View
            style={[
              styles.btnContinue,
              { backgroundColor: phoneNumber ? "#244DB7" : "white" },
            ]}
          >
            <Text style={styles.textContinue}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View> */}

      <TextInput
        style={styles.phoneInputStyle}
        placeholder="Confirm Code"
        keyboardType="number-pad"
        // value={phoneNumber}
        onChangeText={setCode}
        secureTextEntry={false}
      />
      <TouchableOpacity onPress={confirmCode}>
        <View style={styles.sendCode}>
          <Text style={styles.buttonText}>Confirm Code</Text>
        </View>
      </TouchableOpacity>
      {/* </KeyboardAvoidingView> */}
    </View>
  );
};

export default PhoneLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  phoneInputStyle: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    fontSize: 24,
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
    marginBottom: 20,
    textAlign: "center",
    color: "#fff",
  },
  sendVerification: {
    padding: 20,
    backgroundColor: "#3498db",
    borderRadius: 10,
  },
  sendCode: {
    padding: 20,
    backgroundColor: "#9b59b6",
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    flexWeight: "bold",
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    margin: 20,
  },
});
