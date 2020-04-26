import React, { Component } from 'react';
import { Div } from './styles.js';

class Header extends Component {
    render() {
        return(
            <Div>
                <div className="bg"></div>
                <div className="content">
                    <h1>{this.props.name}</h1>
                    <h3>Faça já sua consulta</h3>
                </div>
            </Div>
        )
    }
};

export default Header;

