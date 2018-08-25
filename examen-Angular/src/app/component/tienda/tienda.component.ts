import { Component, OnInit } from '@angular/core';
//Nos conectamos primero al servicio
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  //2- crear una variable para capturar los productos que se traen de firebase
  productos: any;
  compras: any;
  total: number = 0;
  /**Modificamos el constructor para tener conexion con el servidio
   * y traer los datos y la comunicacion entre los diferentes
   * componentes de la aplicacion
   */
  constructor(private conexion: ConexionService) {
    //Traemos una lista de los proudctos, comunicamos con el servicio
   }

  ngOnInit() {
    this.getdatos();
  }

  getdatos(){
    this.conexion.listaItem().subscribe(item=>{
      this.productos = item
    })
  }

  aggCarrito(carrito, unidades:string){
    this.conexion.totales +=  (parseInt(carrito.precio) * parseInt(unidades))
    this.compras = {
      nomProducto: carrito.nombre,
      subTotal: parseInt(carrito.precio) * parseInt(unidades),
      cantidadProducto: unidades,
      imagen: carrito.imagen,
      id: carrito.id,
      uniDispo: parseInt(carrito.cantidad) - parseInt(unidades)
    }
    this.conexion.addCarrito(this.compras)
  }
}
