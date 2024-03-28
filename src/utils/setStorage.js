import AsyncStorage from "@react-native-async-storage/async-storage";

async function setData(dataFor, data) {
  await AsyncStorage.setItem(dataFor, JSON.stringify(data));
}

export default setData;