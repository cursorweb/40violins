import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, SafeAreaView, Image, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [dismiss, setDismiss] = useState(0);
  const [shouldDo, setShouldDo] = useState(true);

  const update = () => {
    setCount(count + 1);
    if (shouldDo) {
      Alert.alert(
        "You clicked on the button!",
        "Thank you very much for clicking on the button, it means a lot to us. The energy you have spent will be wasted!",
        [
          {
            text: "dismiss",
            onPress: () => setDismiss(dismiss + 1)
          },
          {
            text: "close without ratio"
          },
          {
            text: "I didn't ask",
            style: "cancel",
            onPress: () => Alert.alert("rood")
          },
          {
            text: "don't tell me again",
            style: "destructive",
            onPress: () => setShouldDo(false)
          }
        ]
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>{count} : {dismiss} ratio</Text>
      <Image source={require("./assets/adaptive-icon.png")} style={styles.img} />
      <StatusBar hidden={true} />
      <Text onPress={update} style={styles.btn}>Click me pseudo button</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  img: {
    width: 50,
    height: 50
  },
  btn: {
    backgroundColor: 'orange',
    padding: 10,
    display: 'flex',
    width: 80,
    borderRadius: 4,
  }
});
