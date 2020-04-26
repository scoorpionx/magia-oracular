import React, { Component } from 'react';
import { Div } from './styles.js';
import WhatsAppButton from '../../Components/WhatsappButton/index';
import Navbar from '../../Components/Navbar/index';
import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/index';

class Trabalhos extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <WhatsAppButton />
                <Header name="Trabalhos "/>
                <Div>
                    <h1>Trabalhos espirituais para todos os fins e todos os problemas!</h1>
                    <span>Eu, Pai de Xangô, realizo trabalhos espirituais para todos os fins!</span>
                    <span>Entretanto, deixo claro que cada relação é única e a 
                        velocidade nos resultados dos trabalhos feitos por mim dependem da sua
                        evolução espiritual, da fé e da harmonia.</span>
                    <ul>
                        <li>Abertura de caminhos</li>
                        <li>Aconselhamento</li>
                        <li>Afastamento de rivais</li>
                        <li>Atração para o amor</li>
                        <li>Casamento espiritual</li>
                        <li>Banho de libertação</li>
                        <li>Consultas através de búzios</li>
                        <li>Consultas através de tarot</li>
                        <li>Consultas de signos</li>
                        <li>Consultas com baralho cigano</li>
                        <li>Consultas com runas e cristais</li>
                        <li>Curas de doenças espirituais</li>
                        <li>Limpeza espiritual</li>
                        <li>Mapa astral completo</li>
                        <li>Prosperidade para seus negócios</li>
                        <li>Simpatias para todos os fins</li>
                        <li>Trabalhos espirituais para prosperidade e dinheiro</li>
                        <li>União de casal</li>
                    </ul>
                    <h4>Trabalhos 100% garantidos!</h4>
                </Div>
                <Footer />
            </div>
        )
    }
};

export default Trabalhos;

