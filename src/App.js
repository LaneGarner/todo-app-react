import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isClicked: true,
      inputValue: "",
      listOfTodos: []
    }
  }

  handleClick = () => {
    this.state.isClicked ? this.setState({isClicked: false}) : this.setState({isClicked: true})
  }

  handleChange = (e) => {
    this.setState({inputValue: e.target.value})
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({listOfTodos: [...this.state.listOfTodos, this.state.inputValue]})
    this.setState({inputValue: ""})
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.inputValue} onChange={this.handleChange}></input>
            <button type="submit">Submit</button>
          </form>
          <ol>{this.state.listOfTodos.map((todo, i) => {
            return <li key={i}>{todo}</li>
          })}</ol>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
