import React, { Component } from 'react';

class App extends Component {
  // Initialize state
  state = { passwords: [] };

  // Fetch passwords after first mount
  componentDidMount() {
    this.getPasswords();
  }

  getPasswords = () => {
    // Get the passwords and store them in state
    fetch('/api/passwords')
      .then(res => res.json())
      .then(passwords => this.setState({ passwords }));

    // this.setState({ passwords: 'Addy' });
  };

  render() {
    const { passwords } = this.state;
    return <div>Hello {passwords}</div>;
  }
}

export default App;