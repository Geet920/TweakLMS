import { StyleSheet } from "react-native";
import { Video } from "expo-av";

const Tutorial = () => {
  return (
    <Video
      source={{
        uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      }} // the video file
      style={styles.backgroundVideo} // any style you want
      shouldPlay
      useNativeControls
    />
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    flex: 1,
    alignSelf: "stretch",
  },
});

export default Tutorial;
