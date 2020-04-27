import React, { Component } from 'react';
import logo from '../../logo.svg';
import { Div } from './styles.js';

class Header extends Component {
    render() {
        return(
            <Div>
                <div className="bg"></div>
                <div className="div-logo">
                    <img src={logo} className="logo" alt="logo" />
                </div>
                <div className="content">
                    <h1>{this.props.name}</h1>
                    <hr/>
                    <h3>Faça já sua consulta</h3>
                </div>
            </Div>
        )
    }
};

export default Header;

