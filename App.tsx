import { StyleSheet, Text, SafeAreaView, View, StatusBar, Button } from 'react-native';
import { ReactElement } from 'react';

import { ThemeName, ThemeProvider, useTheme } from './theme/theme';

import Nav from './components/Nav';

import Metronome from './components/metronome';
import Tuner from './components/tuner';


function Main() {
  const { setTheme } = useTheme();

  let curItem: ReactElement = <Metronome />;
  function changePage() {
    // change which thing is being shown...
  }

  return (
    <View style={styles().body}>
      <StatusBar
        barStyle="dark-content"
      />

      <SafeAreaView>
        <View style={styles().main}>
          <Text>40 Violins</Text>
          <View>
            {curItem}
          </View>
          <Button title='yo' onPress={() => setTheme((prev: ThemeName) => prev == "light" ? "dark" : "light")} />
        </View>
      </SafeAreaView>

      <Nav changeBtn={changePage} />
    </View>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}

const styles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    body: {
      backgroundColor: theme.background
    },
    main: {
      height: "100%",
      backgroundColor: theme.background
    }
  });
}