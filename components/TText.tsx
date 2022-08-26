import React from "react";
import { Text, StyleProp, TextStyle } from "react-native";
import { useTheme } from "../theme/theme";

interface Styles {
  style?: StyleProp<TextStyle>
}

// themed text
export default function TText({ children, style }: React.PropsWithChildren<Styles>) {
  const { theme } = useTheme();
  
  return (
    <Text style={[{ color: theme.text }, style]}>
      {children}
    </Text>
  )
}