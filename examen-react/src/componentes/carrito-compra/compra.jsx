import React, {Component} from 'react'

class Compra extends Component {
    constructor(props){
        super(props);
        this.cantidad = this.props.cantidad;
        this.precio = this.props.precio;
        this.imagen = this.props.imagen;
        this.nombre = this.props.nombre;
    }


    render(){
        return(
            <div className="col-12 mt-3" >
                  <div className="row">
                      <div className="col-5">
                          <img className="card-img-top" src={`imagen/${this.imagen}`} />
                        </div>
                        <div className="col-7">
                          <h5><span>{this.nombre}</span></h5>
                          <h6><span>Unidades: {this.cantidad}</span></h6>
                          <h6><span>Subtotal:$ {this.precio}</span></h6>
                        </div>
                  </div>
              </div>
        )
    }
}

export default Compra