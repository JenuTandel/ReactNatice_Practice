import React from 'react';
import {Button, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import ActionCards from './components/ActionCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import FlatCards from './components/FlatCards';

export default function App() {
  const handleClick = () => {
    console.log('Clicked');
  };
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
        <ActionCards />
        <Button title="Click me" onPress={handleClick} />
      </ScrollView>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   scrollview: {flex: 1},
// });
