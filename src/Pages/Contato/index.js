import React, { Component } from 'react';
import { Div } from './styles.js';
import WhatsAppButton from '../../Components/WhatsappButton/index';
import Navbar from '../../Components/Navbar/index';
import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/index';

class Contato extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <WhatsAppButton />
                <Header name="Contato"/>
                <Div>
                    <div className="text">
                        <h1>Agende sua consulta!</h1>
                        <div className="div-span">
                            <span>Entre em contato comigo por meio deste formulário ou pelos telefones:</span>
                            <span>(62) 999340-5668 (Whatsapp)</span>
                        </div>
                        <h3>À sua disposição 24 horas!</h3>
                    </div>
                    
                    <div className="div-form">
                        <form className="form" action="" method="post">
                            <input className="nome" type="text" placeholder="Nome" />
                            <input className="email" type="text" placeholder="Email" />
                            <input className="assunto" type="text" placeholder="Assunto" />
                            <textarea className="msg" type="text" placeholder="Digite aqui sua mensagem" />
                            <div className="div-btn">
                                <button className="btn">Enviar</button>
                            </div>
                        </form>
                    </div>

                </Div>
                <Footer />
            </div>
        )
    }
};

export default Contato;

