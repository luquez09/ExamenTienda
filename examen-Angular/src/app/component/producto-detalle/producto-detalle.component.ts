import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  nombre: string;
  cantidad: string;
  precio: string;
  img: string;
  ngOnInit() {
    this.router.queryParams
      .subscribe(params =>{
        console.log(params);
        this.cantidad = params.cantidad
        this.nombre = params.nombre
        this.precio = params.precio
        this.img = params.img
      })
  }

}
