import { ScrollView, StyleSheet, Text } from "react-native";

export default function Nav({ changeBtn } : { changeBtn: (num: number) => void }) {
  

  return (
    <ScrollView style={styles.nav} horizontal={true} bounces={false}>
      <Text style={styles.btn}>Stuff1</Text>
      <Text style={styles.btn}>Stuff2</Text>
      <Text style={styles.btn}>Stuff3</Text>
      <Text style={styles.btn}>Stuff3</Text>
      <Text style={styles.btn}>Stuff3</Text>
      <Text style={styles.btn}>Stuff3</Text>
      <Text style={styles.btn}>Stuff3</Text>
      <Text style={styles.btn}>Stuff3</Text>
      <Text style={styles.btn}>Stuff3</Text>
      <Text style={styles.btn}>Stuff3</Text>
      <Text style={styles.btn}>Stuff3</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "red",
    padding: 10
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "orange"
  }
});