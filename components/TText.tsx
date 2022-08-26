import React from "react";
import { Text, StyleSheet } from "react-native";
import { useTheme } from "../theme/theme";

interface Styles {
  style?: StyleSheet.NamedStyles<any> | StyleSheet.NamedStyles<any>[]
}

// themed text
export default function TText({ children, style }: React.PropsWithChildren<Styles>) {
  const { theme } = useTheme();
  
  return (
    <Text style={[style, { color: theme.text }]}>
      {children}
    </Text>
  )
}