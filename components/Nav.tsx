import { ScrollView, StyleSheet, Text } from "react-native";
import { useTheme } from "../theme/theme";

export default function Nav({ changeBtn }: { changeBtn: (num: number) => void }) {
  return (
    <ScrollView style={styles().nav} horizontal={true} bounces={false}>
      {[...new Array(50)].map((_, i) => <Text key={i} style={styles().btn}>Stuff{i + 1}</Text>)}
    </ScrollView>
  );
}

const styles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    btn: {
      backgroundColor: theme.primary,
      color: theme.text,
      padding: 10
    },
    nav: {
      display: "flex",
      flexDirection: "row",
      position: "absolute",
      bottom: 0,
      height: 85,
      width: "100%"
    }
  });
};