import React, { Component } from 'react';
import Flexbox from 'flexbox-react';

import Task from './Task.js';

// App component - represents the whole app
export default class App extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
      { _id: 4, text: 'This is task 4' },
      { _id: 5, text: 'This is task 5' },
      { _id: 6, text: 'This is task 6' },
    ];
  }

  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }




  render() {
    return (
      <div className="container" style={containerStyle} >
        <header style={headerStyle}>
          <h1 style={h1Style}>HILDEGARD</h1>
          <h1 style={h1Style}>WIGGENHORN</h1>
        </header>

        <Flexbox  flexDirection="row" >

        <Flexbox flexWrap='wrap' flexDirection='row'>
          {this.renderTasks()}
        </Flexbox>
      </Flexbox>

      </div>
    );
  }
}

const containerStyle = {
  flex: 1,
  margin: 0,
  minHeight: '100%',
  background: 'white',
}
const headerStyle = {
  background: '#d2edf4',
  padding: 20,
  position: 'relative',
}
const h1Style = {
  fontFamily: 'Montserrat',
  fontWeight: 700,
  //fontStyle: 'italic',
  fontSize: 24,
  margin: 10,
  marginBottom: 10,
  marginRight: 1,
}
