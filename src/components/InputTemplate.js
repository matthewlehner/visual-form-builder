import React, { Component, PropTypes } from "react";
import { findDOMNode } from "react-dom";
import { DragSource, DropTarget } from "react-dnd";

const inputTemplateSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index
    };
  }
};

const inputTemplateTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get a vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half or the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%;

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    props.onReorderInputs(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations, but it's okay here for the sake
    // of performance to avoid expensive index searches.
    monitor.getItem().index = hoverIndex; // eslint-disable-line no-param-reassign
  }
};

class InputTemplate extends Component {
  handleEditClick(event) {
    event.preventDefault();
  }

  render() {
    const label = this.props.label ? <label>{this.props.label}</label> : undefined;
    const { type, onEdit, onRemove, connectDropTarget, connectDragSource, isDragging } = this.props;
    const className = `input-wrapper ${type}`;
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(connectDropTarget(
      <div className={className} style={{ opacity }}>
        {label}
        <input {...this.props} />
        <button
          onClick={onEdit}
          className="edit-btn"
        >Edit</button>
        <button
          onClick={onRemove}
          className="remove-btn"
        >Remove</button>
      </div>
    ));
  }
}

InputTemplate.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  onEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.func.isRequired
};

const type = "INPUT";

InputTemplate = DropTarget(type, inputTemplateTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))(InputTemplate);

InputTemplate = DragSource(type, inputTemplateSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(InputTemplate);

export default InputTemplate;
