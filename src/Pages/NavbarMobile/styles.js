import styled from 'styled-components';

export const Div = styled.div`
    .div-icon {
        display: flex;
        flex-direction: row-reverse;
        width: 100%;
        margin-bottom: 40px;
    }
    
    .bars-icon {
        font-size: 80px;
        color: #000000;
        left: 0;
        right: 100%;
    }

    a {
        text-decoration: none;
        display: flex;
        flex-direction: column;
        color: #000000;
        text-align: center;
        padding: 50px;
        font-family: 'Playfair Display', 'Roboto', serif;
        font-size: 60px;
        letter-spacing: 3px;
        text-transform: uppercase;
    }

    hr {
        width: 80%;
    }

    @media only screen and (min-width: 1164px) {
        display: none;
    }
`;