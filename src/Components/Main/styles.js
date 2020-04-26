import styled from 'styled-components';

export const Div = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #ffffff;

    background-color: #000000; 
        position: relative;
        z-index: 2;
    
    .bg-img {
        background-position: center;
        background-size: 7000px;

        position: absolute;
        z-index: -1;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url("https://imgur.com/pbx4dtR.jpg");
        opacity: .4;
            width: 100%;
            height: 100%;
    }

    h1, h2, span {
        padding: 30px 60px;
        line-height: 140%;
        text-align: justify;
    }

    h1 {
        font-size: 70px;
        text-align: center;
    }

    h2 {
        font-size: 30px;
        text-align: center;
        padding-bottom: 0;
    }

    span {
        display: inline-block;
        font-size: 16px;
        font-weight: 400;
    }

    h3, h4 {
        text-align: center;
        font-size: 30px;
    }

    h3 {
        padding: 0;
        margin-bottom: 2px;
        font-weight: bolder;
    }

    h4 {
        margin-top: 0;
        margin-bottom: 40px;
        font-weight: 400;
    }

    @media only screen and (min-width: 1164px) {
        span, h1, h2 {
            padding: 30px 300px;
        }
        
        span {
            font-size: 25px;
        }
        
        h1 {
            font-size: 50px;
        }

        h2 {
            font-size: 30px;
        }

        h3, h4 {
            font-size: 30px;
        }

        .bg-img {
            background-size: cover;
        }

    }
`;