import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { ReactElement } from 'react';

import Nav from './components/Nav';

import Metronome from './components/metronome';
import Tuner from './components/tuner';


export default function App() {
  let curItem: ReactElement = <Metronome />;
  function changePage() {
    // change which thing is being shown...
  }

  return (
    <SafeAreaView>
      <Nav changeBtn={changePage} />
      <Text>40 Violins</Text>
      <View>
        {curItem}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
