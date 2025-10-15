import * as React from "react";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import NotificationScreen from './Screens/NotificationScreen'

const paperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#FFD300",     // Bee gold
    background: "#0a0a0a",  // Deep black
    surface: "#1a1a1a",
    text: "#FFD300",
    placeholder: "#aaa",
  },
};

export default function App() {
  return (
    <PaperProvider theme={paperTheme}>
      <StatusBar style="light" />
      <NotificationScreen />
    </PaperProvider>
  );
}
