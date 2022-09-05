import { Component, Fragment } from 'react';
class FragmentComponent extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <>
        <div>Mike</div>
        <div>Expert</div>{' '}
      </>
    );
  }
}

export default FragmentComponent;
