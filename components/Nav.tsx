import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { apps } from "../apps/loader";
import { useTheme } from "../theme/theme";

export default function Nav({ changeBtn }: { changeBtn: (num: number) => void }) {
  let [selected, setSelected] = useState(0);
  let [hovered, setHovered] = useState<number | null>(null);

  return (
    <ScrollView style={styles().nav} contentContainerStyle={styles().alignNav} horizontal={true} bounces={false}>
      {Object.keys(apps).map((key, i) =>
        <TouchableOpacity
          key={i}
          style={[
            styles().btn,
            i == selected ? styles().selected : null,
            i == hovered ? styles().hovered : null,
          ]}
          onPressIn={() => setHovered(i)}
          onPress={() => setSelected(i)}
          onPressOut={() => setHovered(null)}
          activeOpacity={1}
        >
          <Text>{key.toUpperCase()}</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

const styles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    btn: {
      backgroundColor: theme.primary,
      color: theme.text,
      padding: 10,
      borderWidth: 5,
      borderColor: theme.primary,
      height: '100%',
      borderRadius: 10
    },
    hovered: {
      backgroundColor: theme.primary2,
      borderColor: theme.primary2,
    },
    selected: {
      backgroundColor: theme.primary,
      borderColor: theme.primary2,
      fontWeight: "bold",
    },
    nav: {
      position: "absolute",
      bottom: 0,
      height: 85,
      width: "100%",
      padding: 10,
      backgroundColor: theme.secondary
    },
    alignNav: {
      display: "flex",
      flexGrow: 1,
      flexDirection: "row",
      alignItems: "baseline",
      justifyContent: 'space-evenly',
    }
  });
};