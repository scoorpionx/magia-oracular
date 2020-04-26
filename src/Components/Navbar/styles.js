import styled from 'styled-components';

export const Div = styled.div`
    display: flex;
    margin: 0;
    width: 100%;
    background: #0b1859;
    
    flex-direction: row-reverse;
    justify-content: start;
    
    a {
        display: none;
    }

    .div-icon {
        display: flex;
        margin: 5px;
    }

    .bars-icon {
        display: flex;
        color: #ffffff;
        font-size: 80px;
        padding: 15px 15px 15px 0;
    }

    @media only screen and (min-width: 1164px) {
        justify-content: center;
        
        .bars-icon {
            display: none;
        }

        .div-icon {
            display: none;
        }

        a {
            display: flex;
            float: left;
            color: #f2f2f2;
            text-align: center;
            padding: 30px 45px 30px 45px;
            font-family: 'Playfair Display', 'Roboto', serif;
            font-weight: 400;
            text-decoration: none;
            font-size: 17px;
            letter-spacing: 3px;
        }
    }
    
    
`;