import React, { Component } from 'react';
import Nav from './views/common/layout/Nav';
import Footer from './views/common/layout/Footer';
import './index.css';

class App extends Component {
  render() {
    return (
      <div>
       <Nav />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
