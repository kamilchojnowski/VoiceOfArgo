import StoryNode from './StoryNode'
import {Cycles, Stories} from './enums'

class ArgoState {
    cycle: Cycles
    story: Stories
    id: string


    constructor (cycle: Cycles, story: Stories, id: string) {
        this.cycle = cycle
        this.story = story
        this.id = id
    }


}

export default ArgoState