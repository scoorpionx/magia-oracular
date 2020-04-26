import styled from 'styled-components';

export const Div = styled.div`
    background: #ffffff;
    display: flex;
    flex-direction: column;
    padding: 40px;

    h1, h4 {
        text-align: center;
        padding: 5px;
    }

    span {
        padding: 10px;
        text-align: justify;
    }

    li {
        padding: 10px;
    }

    @media only screen and (min-width: 1164px) {
        padding: 40px 40px 0 40px;
        
        h1 {
            font-size: 50px;
        }

        span {
            font-size: 30px;
        }

        li {
            font-size: 20px;
        }

        h4 {
            font-size: 20px;
            padding: 0;
            margin: 10px;
        }
    }

`;