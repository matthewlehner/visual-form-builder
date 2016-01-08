import React, { Component, PropTypes } from "react";
import { DragSource, DropTarget } from "react-dnd";

const inputTemplateSource = {
  beginDrag(props) {
    // These are attributes passed to the `monitor` object
    // We're storing originalIndex in case the drag and drop is canceled
    return {
      id: props.id,
      index: props.index,
      originalIndex: props.index
    };
  },

  endDrag(props, monitor) {
    const { index, originalIndex } = monitor.getItem();
    const didDrop = monitor.didDrop();

    if (!didDrop) {
      props.moveInput(index, originalIndex);
    }
  }
};

const inputTemplateTarget = {
  hover(props, monitor) {
    const { id: draggedId, index: dragIndex } = monitor.getItem();
    const { id: overId, index: overIndex } = props;

    if (draggedId !== overId) {
      props.moveInput(dragIndex, overIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations, but it's okay here for the
      // sake of performance to avoid expensive index searches.
      monitor.getItem().index = overIndex; // eslint-disable-line no-param-reassign
    }
  }
};

class Sortable extends Component {
  render() {
    const { connectDropTarget, connectDragSource, isDragging } = this.props;
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(connectDropTarget(
      <div className="drag-source" style={{ opacity }}>
        { this.props.children }
      </div>
    ));
  }
}

Sortable.propTypes = {
  children: PropTypes.node,
  moveInput: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool
};

const type = "INPUT";

Sortable = DropTarget(type, inputTemplateTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))(Sortable);

Sortable = DragSource(type, inputTemplateSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(Sortable);

export default Sortable;
