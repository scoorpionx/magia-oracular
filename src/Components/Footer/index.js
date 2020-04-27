import React, { Component } from 'react';
import { Div } from './styles.js';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

class Footer extends Component {
    render() {
        return(
            <Div>
                <div className="icons">
                    <a href="https://www.instagram.com/magiaoracular">
                        <FaInstagram
                            className="instagram-icon"
                        />
                    </a>

                    <a href="https://www.instagram.com/magiaoracular">

                        <FaFacebook
                            className="facebook-icon"
                        />
                    </a>
                    
                </div>

                <div>
                    <span>© 2020 Magia Oracular - Todos os direitos reservados - Site criado por <a href="https://www.linkedin.com/in/joao-vitor-borges">João Vitor</a></span>
                </div>
            </Div>
        )
    }
}; 

export default Footer;

