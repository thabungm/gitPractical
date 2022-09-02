import { Component } from 'react';

class Reversecc extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = { message: 'hello' };
  }
  // state = { message: 'hello' };

  render() {
    return (
      <div>
        <h3>Class component</h3>

        <div>
          <input
            type='text'
            id='inputFld'
            onChange={(event) => {
              this.setState({
                message: event.target.value,
              });
            }}
          />
        </div>
        <div>{this.state.message.split('').reverse().join('')}</div>
      </div>
    );
  }
}

export default Reversecc;
