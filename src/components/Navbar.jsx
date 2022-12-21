import React, { Component } from 'react';

export default class Navbar extends Component {
    constructor() {
        super();
        this.state = {}
    }


    render() {
    
    return (
      <div>
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">PokeSearch</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                <a className="nav-link active" href="#">Features</a>
                <a className="nav-link active" href="#">Shop</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}