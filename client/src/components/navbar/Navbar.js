import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
 
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            View
          </Link>
          <Link className="navbar-brand" to="/upload">
            Upload
          </Link>
        </div>
      </nav>
    );
  }
}
