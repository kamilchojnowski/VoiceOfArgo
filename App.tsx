import React, { useState, useEffect, useReducer} from 'react';
import { MenuState } from './game_states/Menu';
import { States } from './game_states/State';
import { StoryState } from './game_states/StoryState';


export default function App() { 
  const [gameState, setGameState] = useState(States.Menu)
  switch(gameState){
    case States.Menu:
      return (
        <MenuState setGameState={setGameState} />
      )
    case States.Story:
      return (
        <StoryState setGameState={setGameState} />
      )
  }
}