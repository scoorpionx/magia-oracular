import styled from 'styled-components';

export const Div = styled.div`
    width: 100%;

    .Container {
        z-index: 6;
        right: 5vw;
        bottom: 3vw;
    }

    .btn {
        background-color: #44c767;
        width: 150px;
        height: 150px;
    }

    .btn:hover {
        background-color: #000;
    }

    .wpp-icon {
        color: #ffffff;
        font-size: 500%;
        text-shadow:0px 1px 0px #2f6627;
    }
    
    @media only screen and (min-width: 1164px) {
        .btn {
            width: 70px;
            height: 70px;
        }

        .wpp-icon {
           font-size: 300%;
        }
    }
`;

