import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Nav from './views/common/layout/Nav';
import AdminNav from './views/admin/AdminNav';
import Footer from './views/common/layout/Footer';
import './index.css';

class App extends Component {

  render() {
    console.log('Avoinding Stupid render from the begining!!!');
    return (
      <div>
        {this.props.isLoggedIn ? <AdminNav /> : <Nav />}
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state =>{
  console.log(state);
  return {
    isLoggedIn: state.common.isLoggedIn
  }
};

export default withRouter(connect(mapStateToProps)(App));
