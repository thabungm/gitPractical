import { Component } from 'react';
class Counter extends Component {
  constructor(props) {
    super(props);
  }

  state = { counter: 0 };

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  throwError() {
    throw new Error('Simulated error');
  }
  render() {
    return (
      <>
        {this.state.counter === 5 && this.throwError()}
        <h3>{this.state.counter}</h3>
        <button onClick={() => this.handleClick()}>+</button>
      </>
    );
  }
}

export default Counter;
