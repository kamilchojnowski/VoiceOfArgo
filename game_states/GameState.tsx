import { MenuState } from "./Menu"
import { State } from "./State"
import { StoryState } from "./StoryState"

export class GameState {
    state: State
    dispatch: Function

    constructor(state: State, dispatch: Function) {
        this.state = state
        this.dispatch = dispatch
    }

    render () {
        return this.state.render()
    }
}