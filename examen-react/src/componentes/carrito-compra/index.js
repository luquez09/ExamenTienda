import React, {Component} from 'react';
import Compra from '../carrito-compra/compra.jsx'
import Header2 from '../header/navbar.js'

class Carrito extends Component {
    constructor(){
        super()
       this.state = {
           compras:[],
           totalCompra:0
       }
        
    }

    componentDidMount(){
        let carrito = JSON.parse(localStorage.getItem('compra'))
        let total = localStorage.getItem('pago')
        this.setState({compras: carrito, totalCompra: total})
        console.log(total)
    }


    pago(){
        localStorage.setItem('pago',0)
        localStorage.setItem('aviso',0)
    }

    render(){
        return(
           <div className="container">
           <Header2/>
            <div className="row">
            <div className="col-8 mt-5 ">
                {this.state.compras.map(compra => {
                    return(
                      <Compra
                      precio = {compra.precio}
                      cantidad = {compra.cantidad}
                      imagen = {compra.imagen}
                      nombre = {compra.nombre}
                      />
                    )
                })}              
            </div>
            <div className="col-4 mt-5">
                <div className="card">
                    <div className="card-header">
                     Factura de pago
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Total a pagar</h5>
                      <p className="card-text">Pago: {this.state.totalCompra}</p>
                      <a onClick={()=>this.pago()} className="btn btn-primary">Pagar</a>
                    </div>
                  </div>
            </div>
        </div>   </div>
        );
    }
}

export default Carrito;