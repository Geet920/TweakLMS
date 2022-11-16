import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ margin: 20 }}>
        <Text style={styles.textTitle}>Dark Mode</Text>
        <Text style={styles.textTitle}>Community Guidelines</Text>
        <Text style={styles.textTitle}>Terms of Service</Text>
        <Text style={styles.textTitle}>About</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ROUTES.LOGIN");
          }}
        >
          <Text style={styles.textTitle}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textTitle: {
    fontSize: 15,
    marginTop: 10,
    fontWeight: "bold",
  },
});
