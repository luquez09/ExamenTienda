import React, {Component} from 'react';
import Header2 from '../header/navbar'
class Detalles extends Component {
    constructor(){  
        super()
        const nombre = localStorage.getItem('nombre');
        const cantidad = localStorage.getItem('cantidad');
        const precio = localStorage.getItem('precio');
        const imagen = localStorage.getItem('imagen');
    
    
        this.state = {
          nom: nombre,
          can: cantidad,
          pre: precio,
          ima: imagen
        }
      }
    
    render(){
        return(
            <div className="container">
            <Header2/>
            <div className="row mt-5">
                <div className="col-6">
                    <img className="card-img-top"  src={`imagen/${this.state.ima}`} />
                </div>
                <div className="card-body col-6">
                  <h1>{this.state.nom}</h1>
                  <p>Precio: ${this.state.pre}</p>
                  <p>Cantidad: {this.state.can}</p>
                  <div className="card-body">
                  <a href="/Home" className="card-link">Volver</a>
                </div>
                </div>
                
            </div>
        
        </div>
        );
    }
}

export default Detalles;