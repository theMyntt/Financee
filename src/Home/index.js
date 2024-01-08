import { Text, View, StyleSheet, Image } from "react-native";
import Graphic from "../img/graphic.png";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={Graphic} style={styles.image} />
      <View style={styles.optionsContainer}>
        <Text style={styles.brandText}>Welcome.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
    // alignItems: "center"
  },
  image: {
    height: "50%",
    width: "100%"
  },
  brandText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "900"
  },
  optionsContainer: {
    paddingHorizontal: 30
  }
});
