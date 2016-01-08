import React, { Component, PropTypes } from "react";
import { DragSource, DropTarget } from "react-dnd";

const inputTemplateSource = {
  beginDrag(props) {
    // These are attributes passed to the `monitor` object
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
      props.onReorderInputs(index, originalIndex);
    }
  }
};

const inputTemplateTarget = {
  hover(props, monitor) {
    const { id: draggedId, index: dragIndex } = monitor.getItem();
    const { id: overId, index: overIndex } = props;

    if (draggedId !== overId) {
      props.onReorderInputs(dragIndex, overIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations, but it's okay here for the
      // sake of performance to avoid expensive index searches.
      monitor.getItem().index = overIndex; // eslint-disable-line no-param-reassign
    }
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
  isDragging: PropTypes.bool.isRequired
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
