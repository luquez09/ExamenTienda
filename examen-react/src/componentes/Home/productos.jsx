import React, {Component} from 'react'


class Productos extends Component {
    constructor(props){
        super(props);
        this.cantidad = this.props.cantidad;
        this.precio = this.props.precio;
        this.imagen = this.props.imagen;
        this.nombre = this.props.nombre;

        this.state = {
            pago:0
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
      handleChange(e) {
        this.setState({numero:e.currentTarget.value})
      }
      handleInput(e) {
        console.log(`Valor capturado: '${e.currentTarget.value}'`);
      }

    detalles(nombre, precio, cantidad, imagen){
         localStorage.setItem('nombre', nombre );
         localStorage.setItem('precio', precio);
         localStorage.setItem('cantidad',cantidad );
         localStorage.setItem('imagen', imagen);
         window.location.href="http://localhost:3000/Detalles"
    }
    carrito(nombre, precio, imagen, cantidad){
        let subtotal = parseInt(precio) * parseInt(cantidad)
        let pago=0;
        let compra
        let aviso=0
        var compras = {
            nombre: nombre,
            precio: subtotal,
            imagen: imagen,
            cantidad: cantidad
        }
        
        if(localStorage.getItem('compra') === null){
            compra = [];
            compra.unshift(compras)
            localStorage.setItem('compra', JSON.stringify(compra))
        }else{
           compra = JSON.parse(localStorage.getItem('compra'))
           compra.unshift(compras) 
           localStorage.setItem('compra', JSON.stringify(compra))
        }

        if(localStorage.getItem('pago') === null){
            pago = subtotal
            localStorage.setItem('pago', pago)
        }else{
           pago = parseInt( localStorage.getItem('pago'))
           pago = pago + subtotal;
           localStorage.setItem('pago', pago)
        }

        if(localStorage.getItem('aviso') === null){
           aviso = 1
            localStorage.setItem('aviso', aviso)
        }else{
           aviso = parseInt( localStorage.getItem('aviso'))
           aviso = aviso + 1;
           localStorage.setItem('aviso', aviso)
        }

    }

    render(){
        return(
           <div className="col-md-4">
            <div className="card bg-light mt-4">
            <img className="card-img-top" src={`imagen/${this.imagen}`} />
            <div className="card-body">
              <h5 className="card-title">{this.nombre}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Precio: $ {this.precio}</li>
              <li className="list-group-item">Cantidad: {this.cantidad}</li>
            </ul>
            <div className="card-body">
                <button onClick={()=>this.detalles(this.nombre, this.precio, this.cantidad, this.imagen)} type="button" className="btn btn-info btn-sm" >Ver mas</button>
                <button onClick={()=>this.carrito(this.nombre, this.precio, this.imagen, this.state.numero)} type="button" className="btn btn-primary btn-sm mx-2">Agregar</button>
                <input className="col-sm-3" type="number" onChange={this.handleChange} onInput={this.handleInput} />
            </div>
         </div>
         </div>
        )
    }
}

export default Productos