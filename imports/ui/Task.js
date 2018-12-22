import React, { Component } from 'react';

// list item
export default class Task extends Component {
  render() {
    return (
      <li style={liStyle}>{this.props.task.text}</li>
    );
  }
}


const liStyle = {
  padding: 15,
  listStyleType: 'none',
  borderBottomColor: 'black',
  borderBottomWidth: 1,
  borderBottomStyle: 'solid',
}

const liTextStyle = {
  marginLeft: 10,
}
