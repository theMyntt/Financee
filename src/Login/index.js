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

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function navigateHome() {
    try {
      axios
        .post("http://localhost:3000/api/client/get-user", {
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.email == email) {
            navigation.navigate("Home");
          } else {
            setMessage("Invalid email or password.");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch {
      Alert("Error");
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
      <Text style={{ color: "#fff", marginHorizontal: 30, fontSize: 20 }}>
        {message}
      </Text>
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
