import { StyleSheet, Text, SafeAreaView, View, StatusBar, Button } from 'react-native';
import { ReactElement, useState } from 'react';

import { ThemeName, ThemeProvider, useTheme } from './theme/theme';

import TText from './components/TText';
import Nav from './components/Nav';

import { apps } from './apps/loader';


function Main() {
  const { theme, setTheme } = useTheme();

  let [currPage, setCurrPage] = useState<ReactElement>(apps.metronome);
  function changePage(app: keyof typeof apps) {
    setCurrPage(apps[app]);
  }

  return (
    <View style={styles().body}>
      <StatusBar
        barStyle={theme.dark ? "light-content" : "dark-content"}
      />

      <SafeAreaView>
        <View style={styles().main}>
          <TText>40 Violins</TText>
          <View>
            {currPage}
          </View>
          <Button title='change' onPress={() => setTheme((prev: ThemeName) => prev == "light" ? "dark" : "light")} />
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