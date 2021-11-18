import React from 'react'
import './App.css'

export default class App extends React.Component {
  constructor(props){
      super(props);
      this.state = { counter: 0 };
      this.handleIncrement = this.handleIncrement.bind(this);
      this.handleDecrement = this.handleDecrement.bind(this);
    }

    handleIncrement() {
      this.setState({ counter: this.state.counter + 1 })
    }

    handleDecrement() {
      this.setState({ counter: this.state.counter - 1 })
    }

  render() {
    return (
      <div className='App'>

          <header>
              {this.state.counter}
          </header>
        
        <div>
          { (this.state.counter === 0) ? 
            <React.Fragment>
              <button onClick={this.handleIncrement}>+</button>
            </React.Fragment>
            : 
            <React.Fragment>
              <button onClick={this.handleIncrement}>+</button>
              <button onClick={this.handleDecrement}>-</button>
            </React.Fragment>
          }
          
        </div>
        
        
      </div>
    )
  }
}
