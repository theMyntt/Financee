import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.brandText}>Welcome back</Text>
      <View style={styles.card}>
        <View style={{ padding: 20 }}>
          <Text style={styles.textWhite}>Your balance:</Text>
          <Text style={styles.brandText}>USD 00,00</Text>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
    paddingHorizontal: 30,
  },
  image: {
    height: "50%",
    width: "100%",
  },
  brandText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "900",
  },
  card: {
    backgroundColor: "#222222",
    borderRadius: 20,
    justifyContent: "center",
    marginTop: 20,
  },
  textWhite: {
    color: "#fff",
    fontWeight: "900",
  },
  button: {
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 4,
    padding: 5,
    marginRight: 10,
    // marginBottom: 10
  },
});
