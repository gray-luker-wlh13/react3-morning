import React, {Component} from 'react';
import Card from './Components/Card';
import data from './data';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      people: data,
      i: 0
    }
  }

  handleClick = (e) => {
    if(e.target.name === 'next'){
      this.setState({
        i: this.state.i + 1
      })
    } else {
      this.setState({
        i: this.state.i -1
      })
    }
  }

  render(){
    return (
      <div className="App">
        {<Card person={this.state.people[this.state.i]}/>}
        <button name="previous" onClick={this.handleClick}>Previous</button>
        <button name="next" onClick={this.handleClick}>Next</button>
      </div>
    );
  }
}

export default App;
