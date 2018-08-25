import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';
@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.css']
})
export class CarritoCompraComponent implements OnInit {

  constructor(public servicio: ConexionService) { }

  ngOnInit() {
    this.addCompras();
  }
  carrito = [];
  total :any;
  addCompras(){
    this.carrito = this.servicio.carrito
    this.total = this.servicio.totales;
  }

  pagar(){
    this.carrito.forEach(element => {
      console.log(element.id)
      this.servicio.updateItem(element.uniDispo,element.nomProducto,element.imagen,element.id);
    });
    this.servicio.carrito = [];
  }
}
