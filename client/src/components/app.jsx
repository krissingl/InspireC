import React from 'react';
import { Container } from '@material-ui/core';
import DCandidate from './DCandidates.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h3>Ollo?!!</h3>
        <Container maxWidth="lg">
          <DCandidate />
        </Container>
      </div>
    );
  }
}

export default App;
