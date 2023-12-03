import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, GestureResponderEvent } from 'react-native'
import StoryNode, { getStoryNode } from '../StoryNode';
import { State, States } from './State';

export function StoryState (props: { setGameState: (state: States) => void }) {
  const [storyNode, setStoryNode] = useState(new StoryNode("deez", "nuts", "0001"))
  return (
    <View style={styles.container}>
      <StoryNodeView node={storyNode}  />
      <Button title="Next" onPress={() => {setStoryNode(getStoryNode(storyNode.getNext()))}}></Button>
      <Button title="Back" onPress={() => {props.setGameState(States.Menu)}}></Button> 
    </View>
  )
}

export function StoryNodeView(props: {node: StoryNode}) {
  return (
    <View style={styles.container}>
      <View style={styles.title}><Text>{props.node.title}</Text></View>
      <View style={styles.text}><Text>{props.node.text}</Text></View>
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
    title: {
      flex: 0.23,
      borderWidth: 1,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    text: {
      flex: 0.75,
      borderWidth: 1,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
  }
);


