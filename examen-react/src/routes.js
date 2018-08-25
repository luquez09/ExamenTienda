import React from 'react';
import {Route, Switch} from '../node_modules/react-router-dom';

//componentes
import App from './componentes/App';
//import About from './componentes/About';
//import Contact from './componentes/Contact';
import Page404 from './componentes/Page404';

//Implementacion de la tienda
import Login from './componentes/Login'
import Detalles from './componentes/producto-detalle'
import Carrito from './componentes/carrito-compra';
import Home from './componentes/Home';


const AppRoutes = () => 
    <App>
        <Switch>
            <Route exact path="/Carrito" component={Carrito} />
            <Route exact path="/Detalles" component={Detalles} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/" component={Login} />
            <Route component={Page404} />
        </Switch>
    </App>;

export default AppRoutes;
