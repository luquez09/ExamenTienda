//Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types'
//IMPLEMENTACION DE FIREBASE
import firebase from 'firebase'
import {db_config} from './configuracion.js'
import 'firebase/database'

import Content from './global/Content';

class App extends Component {
  //Implementacion de firebase 
  
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const {children} = this.props;
    return (
      <div>
        <Content body={children}/>
      </div>
    );
  }
}

export default App;
