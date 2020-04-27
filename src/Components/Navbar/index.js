import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { Div } from './styles.js';

class Navbar extends Component {
    render() {
        return(
            <Div>
                <div className="content">
                    <Link to="/navigate" className="div-icon">
                        <FaBars className="bars-icon"/>
                    </Link>
                    <Link to="/">Página Inicial</Link>
                    <Link to="/contato">Contato</Link>
                </div>
            </Div>
        )
    }
};

export default Navbar;

