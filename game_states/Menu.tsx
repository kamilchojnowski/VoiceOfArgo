import React from 'react'
import { View, Text, StyleSheet, Button, GestureResponderEvent } from 'react-native'
import { State, States } from './State'

export function MenuState (props: { setGameState: (state: States) => void }) {
  return (
    <View style={styles.container}>
      <Button disabled={true} title='Continue'></Button> 
      <Button title='New Game' onPress={() => {props.setGameState(States.Story)}}></Button> 
      <Button title='Settings'></Button> 
    </View>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: 'space-between',
      padding: 20,
      margin: 10,
      height: 50,
    },
    // buttonActive: {
    //     flex: 0.2
    // },
    // buttonInactive: {
    //     flex: 0.2,
    //     color: 'lightgrey'
    // }
})