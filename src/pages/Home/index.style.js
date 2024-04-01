import { StyleSheet } from "react-native";

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
    borderRadius: 35,
    padding: 5,
    marginRight: 10,
    width: 70,
    height: 70,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 10
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
});

export default styles;