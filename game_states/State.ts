import React from 'react'

export interface State {
    dispatch: Function
    render () : React.JSX.Element
}

export enum States {
    Menu,
    Story
}