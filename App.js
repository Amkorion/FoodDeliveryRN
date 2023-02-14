import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import Colors from "./constants/Colors";
import BasketScreen from "./screens/BasketScreen";
import BasketsScreen from "./screens/BasketsScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import HomeScreen from "./screens/HomeScreen";
import PrepearingOrderScreen from "./screens/PrepearingOrderScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import store from "./store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: Colors.ascent500,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
          <Stack.Screen
            name="Restaurant"
            component={RestaurantScreen}
          ></Stack.Screen>
          <Stack.Screen
            name="Basket"
            component={BasketsScreen}
            options={{ headerShown: false, presentation: "modal" }}
          />
          <Stack.Screen
            name="PrepearingOrder"
            component={PrepearingOrderScreen}
            options={{ headerShown: false, presentation: "fullScreenModal" }}
          />
          <Stack.Screen
            name="Delivery"
            component={DeliveryScreen}
            options={{ headerShown: false, presentation: "fullScreenModal" }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
