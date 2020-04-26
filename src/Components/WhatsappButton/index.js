import React, { Component } from 'react';
import { Div } from './styles.js';
import { FaWhatsapp } from 'react-icons/fa';
import { Fab } from '@material-ui/core';
import { Container } from 'react-floating-action-button';

class Header extends Component {
    render() {
        return(
          <Div>
            <Container className="Container">
              <Fab 
                className="btn"
                href="https://api.whatsapp.com/send?phone=5562993405668&amp;text=Gostaria de agendar uma consulta"
                tooltip="Entre em contato"
              >
                <FaWhatsapp className="wpp-icon"/>
              </Fab>
            </Container>
          </Div>
        )
    }
};

export default Header;

