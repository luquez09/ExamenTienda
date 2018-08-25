import { Injectable } from '@angular/core';
//importamos instancias de firebase
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//estruvtura de los datos que estan en firebase
//1- creamos una estructura para los productos que se traen
export interface Item { cantidad: number, imagen: string, nombre:string, precio: number; }
export interface User { usuario: string, clave:string; }

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  //se crean dos variable para la captura de los datos
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  //Variables para capturar el usuario
  private itemUsuario: AngularFirestoreCollection<User>;
  usuario: Observable<User[]>;

  carrito = [];
  totales :number =0;
  private itemDoc: AngularFirestoreDocument<Item>;

  constructor(public afs: AngularFirestore, public aff: AngularFirestore) {}
  getDatos(){
    this.itemsCollection = this.afs.collection<Item>('productos');
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getUsuario(){
    this.itemUsuario = this.aff.collection<User>('usuario');
    this.usuario = this.itemUsuario.snapshotChanges().pipe(
      map(actions => actions.map(b => {
        const data = b.payload.doc.data() as User;
        const id = b.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  listaItem(){
    this.getDatos();
    return this.items
  }

  litarUsuario(){
    this.getUsuario();
    return this.usuario
  }

  addCarrito(carritos){
    if(this.carrito == null){
      this.carrito = carritos;
    }else{
      this.carrito.unshift(carritos);
    }
  }

  updateItem(unidades, nombre, imagen,id){
    var compra={
      cantidad: unidades,
      nombre:nombre,
      imagen: imagen,
      id:id
    }
    console.log(compra)
    this.itemDoc = this.afs.doc<Item>(`productos/${id}`)
    this.itemDoc.update(compra);
  }
}
