import React, { Component } from 'react';
import { Div } from './styles.js';
import Header from '../../Components/Header/index';
import Main from '../../Components/Main/index';
import WhatsAppButton from '../../Components/WhatsappButton/index';
import Navbar from '../../Components/Navbar/index';
import Footer from '../../Components/Footer/index';

class Inicial extends Component {
    render() {
        return(
            <Div>
                <Navbar />
                <WhatsAppButton />
                <Header name="MAGIA ORACULAR"/>
                <Main />
                <Footer />
            </Div>
        )
    }
};

export default Inicial;

