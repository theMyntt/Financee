import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import axios from "axios";
import { env } from "../../../config/environment";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function navigateHome() {
    try {
      axios
        .post(env.dev.baseUrl + env.dev.routes[0], {
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.email == email) {
            navigation.navigate("Home", { balance: res.data.balance, name: res.data.name });
          } else {
            Alert.alert("Err: 404", "Invalid email or password. Please double-check your credentials and try again.", [
              { text: "OK", onPress: () => console.log("OK Pressed") },
            ]);
          }
        })
        .catch((err) => {
          Alert.alert("Err: 500", "Internal server error", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
        });
    } catch {
      Alert.alert("Err: 500", "Internal error", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  }

  return (
    <View style={style.container}>
      <TextInput
        placeholder="Enter your email."
        style={style.input}
        onChangeText={(e) => setEmail(e.toLowerCase())}
        value={email}
        placeholderTextColor="#fff"
      />
      <TextInput
        placeholder="Enter your password."
        style={style.input}
        onChangeText={(e) => setPassword(e)}
        value={password}
        placeholderTextColor="#fff"
        secureTextEntry={true}
      />
      <TouchableOpacity style={style.startBtn} onPress={() => navigateHome()}>
        <Text style={{ fontWeight: 900 }}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
  },
  input: {
    color: "#fff",
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    height: 40,
    marginBottom: 30,
    paddingHorizontal: 20,
    marginHorizontal: 30,
  },
  startBtn: {
    width: "100%",
    backgroundColor: "#fff",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
});
