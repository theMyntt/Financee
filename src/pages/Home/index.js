import { Text, View, TouchableOpacity } from "react-native";
import styles from "./index.style"
import getData from "../../utils/getStorage";
import { useEffect, useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const data = getData("client");
  
  useEffect(() => {
    console.log("1", data);
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.brandText}>Welcome back, {name}</Text>
      <View style={styles.card}>
        <View style={{ padding: 20 }}>
          <Text style={styles.textWhite}>Your balance:</Text>
          <Text style={styles.brandText}>USD {data.balance}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={{ padding: 20, flexDirection: "row", flexWrap: "wrap" }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textWhite}>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textWhite}>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textWhite}>Transfer</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </View>
  );
}