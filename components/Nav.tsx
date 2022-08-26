import { View, ScrollView, StyleSheet, Text } from "react-native";
import { useTheme } from "../theme/theme";

export default function Nav({ changeBtn }: { changeBtn: (num: number) => void }) {
  return (
    <View>
      <ScrollView style={styles().nav} contentContainerStyle={styles().alignNav} horizontal={true} bounces={false}>
        {[...new Array(6)].map((_, i) =>
          <Text key={i} style={[styles().btn, i == 5 ? styles().selected : null]}>Stuff{i + 1}</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    btn: {
      backgroundColor: theme.primary,
      color: theme.text,
      padding: 10,
      height: '100%'
    },
    selected: {
      backgroundColor: "red",
      fontWeight: "bold",
    },
    nav: {
      position: "absolute",
      bottom: 0,
      height: 85,
      width: "100%"
    },
    alignNav: {
      display: "flex",
      flexGrow: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: 'center',
    }
  });
};