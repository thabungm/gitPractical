import { Component } from 'react';
import ChildComponent from './ChildComponent';
class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  state = { message: '' };
  render() {
    return (
      <div>
        <h3>I am parent component</h3>
        <div>Message in parent: {this.state.message}</div>
        <ChildComponent
          message='Message from parent to child'
          onChangeHandler={(value) => {
            console.log('Inside parent received:' + value);
            this.setState({ message: value });
          }}
        />
      </div>
    );
  }
}

export default App;
