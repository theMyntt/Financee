import { Text, View, TouchableOpacity } from "react-native";
import styles from "./index.style";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useEffect, useState } from "react";
import { HandCoinsIcon } from "lucide-react-native";

export default function Home() {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    async function getData() {
      const data = await AsyncStorage.getItem("client");
      const parse = JSON.parse(data);
      if (data !== null) {
        setName(parse.name);
        setBalance(parse.balance);
      }
    }
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.brandText}>Welcome back, {name}</Text>
      <View style={styles.card}>
        <View style={{ padding: 20 }}>
          <Text style={styles.textWhite}>Your balance:</Text>
          <Text style={styles.brandText}>USD {balance}</Text>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            paddingBottom: 20,
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textWhite}>
              <HandCoinsIcon color="white" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textWhite}>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textWhite}>Transfer</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.card}></View>
    </View>
  );
}
