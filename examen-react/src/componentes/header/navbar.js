import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Header2 extends Component {

  constructor(props){
    super(props);
    this.state = {
      numero:0
    }
  }


  componentDidMount(){
    setInterval(()=>{
      var dato = localStorage.getItem('aviso')
      this.setState({numero:dato})
    },100)

  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand h1">La Bodega</span>
            <div className="row">
              <div className="col-sm">
                <a href="/Home"><i className="fas fa-home mx-3"></i></a>
                <a href="/Carrito"><i className="fas fa-cart-plus mx-3"> <span className="badge badge-light" >{this.state.numero}</span></i></a>
                <a href="/"><i className="fas fa-sign-out-alt mx-3"></i></a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header2;