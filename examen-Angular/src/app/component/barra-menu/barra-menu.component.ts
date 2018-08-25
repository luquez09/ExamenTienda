import { Component, OnInit } from '@angular/core';
//Nos conectamos primero al servicio
import { ConexionService } from '../../services/conexion.service';
@Component({
  selector: 'barra-menu',
  templateUrl: './barra-menu.component.html',
  styleUrls: ['./barra-menu.component.css']
})
export class BarraMenuComponent {

  cantidad :any = 0;
  constructor(private conexion: ConexionService) { 
    setInterval(() => {
      this.cantidad=  this.conexion.carrito;
       this.cantidad = this.cantidad.length;
    }, 500);
  }

  ngOnInit() {}
}
