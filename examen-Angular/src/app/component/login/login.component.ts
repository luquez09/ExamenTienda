import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { ConexionService } from '../../services/conexion.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router, private servicio: ConexionService) { }

  ngOnInit() {
  }
  usuario:any;
  titulo = "";
  validacion ="";
  alerta="";
  iniciar(usuario, clave){
    this.servicio.litarUsuario().subscribe(user=>{
      this.usuario = user;
      this.usuario.forEach(element => {
        if(element.usuario === usuario){
          if(element.clave === clave){
            this.router.navigate(['/tienda']);
          }else{
            this.titulo = "Error!!"
            this.validacion ="Porfavor, verifique contraseña y usuario"
            this.alerta ="alert alert-danger"
          }
        }else{
          this.titulo = "Error!!"
          this.alerta ="alert alert-danger"
          this.validacion ="Porfavor, verifique contraseña y usuario"
        }
      });
    })
  }



}
