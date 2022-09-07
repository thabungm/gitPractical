import { Component } from 'react';
import Counter from './Counter';
import ErrorBoundary from './ErrorBoundary';

class DemoErrorBoundary extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  render() {
    return (
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
    );
  }
}

export default DemoErrorBoundary;
