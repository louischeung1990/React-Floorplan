import {Component} from 'react';
import './App.css';

import FloorPlan from "./components/FloorPlan/FloorPlan"

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <FloorPlan classname="room" />
      </div>
    )
  }
}
