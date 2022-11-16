import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";

const SocialSignInButtons = () => {
  const navigation = useNavigation();
  const signInWithGoogle = () => {
    console.warn("Google Sign in");
  };

  const signInWithPhone = () => {
    navigation.navigate("ROUTES.PHONE_LOGIN");
  };
  return (
    <>
      <CustomButton
        text="Sign in with Phone"
        onPress={signInWithPhone}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Sign in with Google"
        onPress={signInWithGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
    </>
  );
};

const styles = StyleSheet.create({});
export default SocialSignInButtons;
