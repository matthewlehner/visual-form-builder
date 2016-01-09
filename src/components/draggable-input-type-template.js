import { DragSource } from "react-dnd";

import InputType from "./InputType";
import { randomId } from "../helpers";

const inputTemplateSource = {
  beginDrag(props) {
    props.addInput(props.typeName);
    return {
      index: props.inputLength,
      id: randomId(),
      originalIndex: props.inputLength
    };
  },

  endDrag(props, monitor) {
    const { index } = monitor.getItem();
    const didDrop = monitor.didDrop();
    if (!didDrop) {
      props.removeInput(index);
    }
  }
};

const type = "INPUT";

export default DragSource(type, inputTemplateSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging()
}))(InputType);

// export default DraggableInputTypeTemplate;
