import { StatusBar } from 'expo-status-bar';
import React, { useState, setState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() {
  const [state, setState] = useState('deez');

  return (
    <View style={styles.container}>
      <Button onPress={
        () => {
          if(state=='deez') setState('nuts')
          else setState('deez')
        }
      } title={state}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
