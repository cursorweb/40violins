import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

import TText from "./TText";
import { apps } from "../apps/loader";
import { Theme, useTheme } from "../theme/theme";


export default function Nav({ changeBtn }: { changeBtn: (app: keyof typeof apps) => void }) {
  const { theme } = useTheme();
  const styles = () => _styles(theme);
  const keys = Object.keys(apps);

  let [selected, setSelected] = useState(0);
  let [hovered, setHovered] = useState<number | null>(null);

  return (
    <ScrollView style={styles().nav} contentContainerStyle={styles().alignNav} horizontal={true} bounces={false}>
      {keys.map((key, i) =>
        <TouchableOpacity
          key={i}
          style={[
            styles().btn,
            i == selected ? styles().selected : null,
            i == hovered ? styles().hovered : null,
          ]}
          onPressIn={() => setHovered(i)}
          onPress={() => {
            setSelected(i);
            changeBtn(keys[i] as keyof typeof apps);
          }}
          onPressOut={() => setHovered(null)}
          activeOpacity={1}
        >
          <TText
            style={i == selected ? styles().selectedText : null}
          >{key.toUpperCase()}</TText>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

const _styles = (theme: Theme) => {
  return StyleSheet.create({
    btn: {
      backgroundColor: theme.primary,
      color: theme.text,
      padding: 10,
      borderWidth: 5,
      borderColor: theme.primary,
      height: '100%',
      borderRadius: 10,
      display: 'flex',
      justifyContent: "center"
    },
    hovered: {
      backgroundColor: theme.primary2,
      borderColor: theme.primary2,
    },
    selected: {
      backgroundColor: theme.primary,
      borderColor: theme.primary2,
    },
    selectedText: {
      color: "orange",
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