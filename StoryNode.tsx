import main_story from './db/truth_of_the_labirynth/main_story/main_story'

export class StoryNode {
  title: string
  text: string
  next: string

  constructor(title: string, text: string, next: string) {
      this.title = title;
      this.text = text;
      this.next = next;
  }
 
  getNext() {
    return this.next
  }

}

export function getStoryNode (id: string) {
    const content = main_story.get(id)
    return new StoryNode(id, content["text"], content["next"])
}

export default StoryNode;