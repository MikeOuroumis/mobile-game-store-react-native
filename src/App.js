import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import Navigation, { navigationRef } from "./navigation/Navigation";
import { store } from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" hidden={true} />
      <NavigationContainer ref={navigationRef}>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}
