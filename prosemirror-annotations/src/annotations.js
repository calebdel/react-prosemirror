import { Plugin } from 'prosemirror-state'
import Annotation from './Annotation'
import {Decoration, DecorationSet} from "prosemirror-view"

export default options => {
  return new Plugin({
    props: {
      decorations(state) {
        return annotationTooltip(state, dispatch)
      }
    }
  })
}
