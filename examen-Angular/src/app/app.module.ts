import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//hay que importar el modulo que controla los formularios
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';


//Implementacion de firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

//Agregando nuestros servicios, de comunicacion con firebase
import { ConexionService } from "./services/conexion.service";
import { BarraMenuComponent } from './component/barra-menu/barra-menu.component';
import { CarritoCompraComponent } from './component/carrito-compra/carrito-compra.component';
import { LoginComponent } from './component/login/login.component';
import { ProductoDetalleComponent } from './component/producto-detalle/producto-detalle.component';
import { TiendaComponent } from './component/tienda/tienda.component';


//implementacion de las rutas para los componentes 
//implementacion de la srutas de los componentes
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import {RouterModule} from '@angular/router'
import { HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    BarraMenuComponent,
    CarritoCompraComponent,
    LoginComponent,
    ProductoDetalleComponent,
    TiendaComponent,
  ],
  imports: [
    BrowserModule,//Implementacion defirebase
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    //implementacion de las rutas
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot([
     {path:'' , component:LoginComponent},
     {path:'tienda', component:TiendaComponent},
     {path:'carrito', component:CarritoCompraComponent},
     {path:'detalles', component:ProductoDetalleComponent}
    ])
  
  ],
  providers: [ConexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
