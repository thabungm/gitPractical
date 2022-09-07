import { Component } from 'react';
import './style.css';
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
  }
  state = { errorMessage: '' };

  static getDerivedStateFromError(error) {
    return { errorMessage: error.toString() };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  refresh() {
    window.history.go(0);
  }

  render() {
    if (this.state.errorMessage) {
      return (
        <p className='errorContainer'>
          {this.state.errorMessage}
          <br />
          <button onClick={this.refresh}>Refresh</button>
        </p>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
