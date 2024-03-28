import { View, TouchableOpacity, StyleSheet, Image, Text } from "react-native";
import cards from "../../img/cards.png";

export default function StartPage({ navigation }) {
  return (
    <View style={style.container}>
      <Image source={cards} style={style.image} />
      <View style={style.paddingContainer}>
        <Text style={style.brandText}>Your most secure Finance app.</Text>
        <Text style={{color: "#fff", fontSize: 18, marginTop: 10}}>End-to-end encrypted, no one can access it.</Text>
      </View>
      <View style={style.start}>
        <TouchableOpacity style={style.startBtn} onPress={() => navigation.navigate("Login")}>
            <Text style={{fontWeight: 900}}>Start now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        backgroundColor: "#000",
    },
    startBtn: {
        width: "100%",
        backgroundColor: "#fff",
        height: 70,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        height: "50%",
        width: "100%",
        marginTop: 20
    },
    start: {
        position: "absolute",
        bottom: 0,
        width: "100%",
    },
    brandText: {
        fontSize: 36,
        fontWeight: "900",
        color: "#fff"
    },
    paddingContainer: {
        paddingRight: 30,
        paddingLeft: 30
    }
})