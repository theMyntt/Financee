import { Text, View, TouchableOpacity } from "react-native";
import styles from "./index.style"
import { useRoute } from "@react-navigation/native";

export default function Home() {
  const route = useRoute();

  return (
    <View style={styles.container}>
      <Text style={styles.brandText}>Welcome back, {route.params.name}</Text>
      <View style={styles.card}>
        <View style={{ padding: 20 }}>
          <Text style={styles.textWhite}>Your balance:</Text>
          <Text style={styles.brandText}>USD {route.params.balance}</Text>
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