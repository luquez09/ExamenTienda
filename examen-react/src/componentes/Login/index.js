import React, {Component} from 'react';
import firebase from 'firebase'
import {db_config} from '../configuracion.js'
import 'firebase/database'


class Login extends Component {

    constructor(){  
      
        super();
        this.state = {
            usuario:[]
        }
        this.app = firebase.initializeApp(db_config);
        this.db = this.app.database().ref().child('usuarios')
    }
    
    componentDidMount(){
        const {usuario}=this.state;
        this.db.on('child_added', snap=>{
            usuario.push({
                user: snap.val().correo,
                pass: snap.val().clave
            })
            this.setState({usuario})
            console.log(this.state.usuario)
            localStorage.setItem('prueba',JSON.stringify(this.state.usuario[0]))
        });
    }

    validarUsuario(){
        const user = document.getElementById("inputUser").value;
        const pass = document.getElementById("inputPass").value;
      
        let local = JSON.parse(localStorage.getItem('prueba'))
        if(local.user == user){
           if(local.pass==pass){
               window.location.href="http://localhost:3000/Home"
           }else{
            alert("Error, Verifique datos")
           }
        }else{
            alert("Error, Verifique datos")
        }
    }

    render(){
        return(
            <div className="row justify-content-center mt-5">
        <div className="col-sm-6">
        <div className="card">
            <div className="card-header">
              <h1 className="text-center font-weight-light">INICIO DE SESION</h1>
            </div>
            <div className="card-body">
                <form>
                    <div className="form-group ">
                      <label for="inputUser">Usuario</label>
                      <input ref={input => {this.textUser = input;}} type="text" className="form-control" id="inputUser" placeholder="Ingresar Usuario"/>
                        </div>
                        <div className="form-group">
                      <label for="inputPass">Contraseña</label>
                      <input ref={input => {this.textPass = input;}} type="password" className="form-control" id="inputPass" placeholder="Ingresar Contraseña"/>
                        </div>
                        <div className="form-group">
                        <button type="button" onClick={this.validarUsuario}  className="btn btn-primary btn-lg btn-block">INGRESAR</button>
                         </div>
                        </form>
                        </div>
                     </div>
                </div>
         </div>
        );
    }
}

export default Login;