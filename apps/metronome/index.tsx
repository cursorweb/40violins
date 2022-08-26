import { View, StyleSheet, Button } from "react-native";
import { Audio } from "expo-av";

import TText from "../../components/TText";
import { useState } from "react";


export function Metronome() {
  const [start, setStart] = useState(false);

  async function playSound() {
    try {
      const sound = new Audio.Sound();
      sound.loadAsync(
        require('../../assets/sounds/click.wav'),
        { shouldPlay: true }
      );
      await sound.unloadAsync();
    } catch { }
  }

  setInterval(() => {
    if (start) {
      playSound();
    }
  }, 500);

  return (
    <View>
      <TText>Welcome to Metronome</TText>
      <Button title={start ? "Stop Metronome" : "Start Metronome"} onPress={() => setStart(t => !t)} />
    </View>
  );
}

const styles = StyleSheet.create({
});
