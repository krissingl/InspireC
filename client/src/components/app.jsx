import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 'main',
    };
  }

  render() {
    const currentPage = this.state.page;
    return (
      <div>
        <h3>Ollo?!</h3>
        <h5>{`Current Page: ${currentPage}`}</h5>
      </div>
    );
  }
}

export default App;
