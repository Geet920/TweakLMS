/* NEW ONE */

import React from "react";
import { View, Text, Image, TextInput } from "react-native";

import { COLORS, FONTS, SIZES } from "../../constants";

const HomeHeader = ({ onSearch }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../../assets/android/mipmap-xhdpi/ic_launcher.png")}
          resizeMode="contain"
          style={{ width: 90, height: 45 }}
        />

        <View style={{ width: 45, height: 45 }}>
          <Image
            source={require("../../../assets/favicon.png")}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            source={require("../../../assets/favicon.png")}
            resizeMode="contain"
            style={{
              position: "absolute",
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
          Hello Geet 👋
        </Text>

        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Let’s learn!!!
        </Text>
      </View>
    </View>
  );
};

export default HomeHeader;
