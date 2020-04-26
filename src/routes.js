import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Inicial from './Pages/Inicial/index';
import Contato from './Pages/Contato/index';
import NavbarMobile from './Pages/NavbarMobile/index';
import Trabalhos from './Pages/Trabalhos/index';

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Inicial}/>   
                    <Route path="/trabalhos" component={Trabalhos}/>
                    <Route path="/contato" component={Contato}/>
                    <Route path="/navigate" exact component={NavbarMobile}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes;