import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./pages/Home";
import StartPage from "./pages/StartPage";
import Login from "./pages/Login";

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartPage" screenOptions={{
        headerStyle: {
          backgroundColor: "#000000",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "900"
        }
      }}>
        <Stack.Screen name="StartPage" component={StartPage} options={{title: "Welcome"}}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home} options={{headerBackVisible: false, gestureEnabled: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}