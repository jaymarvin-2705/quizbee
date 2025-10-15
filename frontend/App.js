import React from "react";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import ProfileScreen from "./Screens/ProfileScreen";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#FFD300",
    background: "#0a0a0a",
    text: "#FFD300",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <ProfileScreen />
    </PaperProvider>
  );
}
