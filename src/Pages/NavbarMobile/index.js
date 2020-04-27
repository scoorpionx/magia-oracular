import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { Div } from './styles.js';

class Navbar extends Component {
    render() {
        return(
            <Div>
                <div className="div-icon">
                    <Link to="/" className="link-icon">
                        <FaTimes className="bars-icon"/>
                    </Link>
                </div>
                    <Link to="/">Página Inicial</Link>
                    <hr/>
                    <Link to="/contato">Contato</Link>
                    <hr/>
            </Div>
        )
    }
};

export default Navbar;

