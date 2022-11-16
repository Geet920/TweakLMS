import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ROUTES from "../component/Routes";
import Login from "../screens/Login";

import User from "../screens/User";
import CourseDetails from "../screens/CourseDetails";
import SignUpScreen from "../screens/SignUpScreen";
import ConfirmEmailScreen from "../screens/ConfirmEmailScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen/ForgotPasswordScreen";
import NewPasswordScreen from "../screens/NewPasswordScreen/NewPasswordScreen";
import UserDetails from "../screens/User/UserProfile";
import OneDay from "../component/OneDay/OneDay";
import Quiz from "../component/OneDay/Quiz";

// import DrawerNavigator from "./DrawerNavigator";
import BottomTab from "./BottomTab";
import InputOTP from "../screens/PhoneLogin/InputOTP";
import EditProfileScreen from "../screens/User/EditProfile";
import PhoneLogin from "../screens/PhoneLogin/PhoneLogin";
import ChatBot from "../component/Tools/Chatbot/Chatbot";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="ROUTES.LOGIN">
      <Stack.Screen
        name="ROUTES.LOGIN"
        component={Login}
        options={{ headerTitleAlign: "center", title: "Login" }}
      />
      <Stack.Screen
        name="ROUTES.HOME"
        component={BottomTab}
        options={{ headerTitleAlign: "center", title: "Home" }}
      />

      <Stack.Screen
        name="User"
        component={User}
        options={{ headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="ROUTES.USER_DETAILS"
        component={UserDetails}
        options={{ headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="ROUTES.COURSE_DETAILS"
        component={CourseDetails}
        options={{ headerTitleAlign: "center" }}
      />

      <Stack.Screen
        name="ROUTES.SIGNUP"
        component={SignUpScreen}
        options={{ headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="ROUTES.CONFIRM_EMAIL"
        component={ConfirmEmailScreen}
        options={{ headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="ROUTES.FORGOT_PASSWORD"
        component={ForgotPasswordScreen}
        options={{ headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="ROUTES.NEW_PASSWORD"
        component={NewPasswordScreen}
        options={{ headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="ROUTES.OTP"
        component={InputOTP}
        options={{ headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="ROUTES.EDIT_PROFILE"
        component={EditProfileScreen}
        options={{ headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="ROUTES.PHONE_LOGIN"
        component={PhoneLogin}
        options={{ headerTitleAlign: "center", title: "Phone" }}
      />
      <Stack.Screen
        name="ROUTES.ONE_DAY"
        component={OneDay}
        options={{ headerTitleAlign: "center", title: "Phone" }}
      />
      <Stack.Screen
        name="ROUTES.QUIZ"
        component={Quiz}
        options={{ headerTitleAlign: "center", title: "Phone" }}
      />
      <Stack.Screen
        name="ROUTES.CHATBOT"
        component={ChatBot}
        options={{ headerTitleAlign: "center", title: "Phone" }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
