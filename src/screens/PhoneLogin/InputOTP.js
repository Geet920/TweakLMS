// import {
//   Alert,
//   KeyboardAvoidingView,
//   StyleSheet,
//   Text,
//   View,
// } from "react-native";
// import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
// import React, { useEffect, useRef, useState } from "react";

// const InputOTP = () => {
//   let textInput = useRef(null);
//   const lengthInput = 6;
//   const defaultCountdown = 30;
//   const [internalVal, setInternalVal] = useState("");
//   //   const [countdown, setCountdown] = useState(defaultCountdown);

//   //   useEffect(() => {
//   //     this.clockCall = setInterval(() => {
//   //       decrementClock();
//   //     }, 1000);
//   //     return () => {
//   //       clearInterval(this.clockCall);
//   //     };
//   //   }, []);

//   //   const decrementClock = () => {
//   //     setCountdown(countdown - 1);
//   //   };

//   const onChangeText = (val) => {
//     Alert.alert(val);
//     setInternalVal(val);
//   };

//   useEffect(() => {
//     textInput.focus();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <KeyboardAvoidingView
//         keyboardVerticalOffset={50}
//         behavior={"padding"}
//         style={styles.containerAvoidingView}
//       >
//         <Text style={styles.titleStyle}>
//           {"Input your OTP code sent via SMS"}{" "}
//         </Text>
//         <View>
//           <TextInput
//             ref={(input) => (textInput = input)}
//             onChangeText={onChangeText}
//             style={{ width: 0, height: 0 }}
//             value={internalVal}
//             maxLength={lengthInput}
//             returnKeyType="done"
//             keyboardType="numeric"
//           />
//           <View style={styles.containerInput}>
//             {Array(lengthInput)
//               .fill()
//               .map((data, index) => (
//                 <View key={index} style={styles.cellView}>
//                   <Text
//                     style={styles.cellText}
//                     onPress={() => textInput.focus()}
//                   >
//                     {internalVal && internalVal.length > 0
//                       ? internalVal[index]
//                       : ""}
//                   </Text>
//                 </View>
//               ))}
//           </View>

//           <View style={styles.bottomView}>
//             <TouchableOpacity>
//               <View style={styles.btnChangeNumber}>
//                 <Text style={styles.textChange}>Change Number</Text>
//               </View>
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <View style={styles.btnResend}>
//                 <Text style={styles.textResend}>Resend OTP (30)</Text>
//               </View>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </KeyboardAvoidingView>
//     </View>
//   );
// };

// export default InputOTP;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   containerAvoidingView: {
//     flex: 1,
//     alignItems: "center",
//     padding: 10,
//   },
//   titleStyle: {
//     marginTop: 50,
//     marginBottom: 50,
//     fontSize: 16,
//   },
//   containerInput: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   cellView: {
//     paddingVertical: 11,
//     width: 40,
//     margin: 5,
//     justifyContent: "center",
//     alignItems: "center",
//     borderBottomWidth: 1.5,
//   },
//   cellText: {
//     textAlign: "center",
//     fontSize: 16,
//   },
//   bottomView: {
//     flexDirection: "row",
//     flex: 1,
//     justifyContent: "flex-end",
//     marginBottom: 50,
//     alignItems: "center",
//   },
//   btnChangeNumber: {
//     width: 150,
//     height: 50,
//     borderRadius: 10,
//     alignItems: "flex-start",
//     justifyContent: "center",
//   },
//   textChange: {
//     color: "#234DB7",
//     alignItems: "center",
//     fontSize: 16,
//   },
//   btnResend: {
//     width: 150,
//     height: 50,
//     borderRadius: 10,
//     alignItems: "flex-end",
//     justifyContent: "center",
//   },
//   textResend: {
//     alignItems: "center",
//     fontSize: 16,
//   },
// });

import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function InputOTP(props) {
  const [code, setCode] = useState("");

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Enter OTP</Text>
      <TextInput
        autoFocus
        value={code}
        onChangeText={setCode}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Confirm OTP" onPress={() => props.onSubmit(code)} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 2,
    borderColor: "lightblue",
    width: 300,
    marginVertical: 30,
    fontSize: 25,
    padding: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 25,
  },
});
