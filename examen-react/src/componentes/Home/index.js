import React, {Component} from 'react';

import firebase from 'firebase'
import {db_config} from '../configuracion.js'
import 'firebase/database'
 
import Productos from './productos.jsx'
import Header2 from '../header/navbar.js'

class Home extends Component {
  constructor(){  
      
    super();
    this.state = {
        tienda:[],
        proTienda:[]
    }
    this.app = firebase.initializeApp(db_config);
    this.db = this.app.database().ref().child('productos')
  }

  componentDidMount(){
    const {tienda}=this.state;
    this.db.on('child_added', snap=>{
        tienda.push({
            cantidad: snap.val().cantidad,
            precio: snap.val().precio,
            imagen: snap.val().imagen,
            nombre: snap.val().nombre,
        })
        this.setState({tienda})
    });
  }
  
  render(){
        return(
          <div className="container">
          <Header2/>
             <div className="row">
                  {
                    this.state.tienda.map(producto => {
                     return(
                       <Productos 
                        precio = {producto.precio}
                        cantidad = {producto.cantidad}
                        imagen = {producto.imagen}
                        nombre = {producto.nombre}
                       />
                     )
                    })
                  }  
            </div>
          </div>
        );
    }
}

export default Home;