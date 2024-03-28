import AsyncStorage from "@react-native-async-storage/async-storage";

async function getData(dataName) {
  try {
    const data = await AsyncStorage.getItem(dataName);
    if (data !== null) {
      return JSON.parse(data);
    } else {
      return null; 
    }
  } catch (error) {
    console.error("Erro ao obter dados do AsyncStorage:", error);
    return null; 
  }
}

export default getData;
