import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Upload from "./components/Upload/Upload"
import View from "./components/view/View"
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import './App.css';
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
            <Route exact path="/" component={View} />
            <Route exact path="/upload" component={Upload} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

