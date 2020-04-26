import styled from 'styled-components';

export const Div = styled.div`
    .bg {
        position: fixed;
        z-index: -1;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url("https://imgur.com/63bmgj8.jpg"); 
        background-position: center;
        opacity: .85;
        width: 100%;
        height: 100%;
    }

    .content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: 'AmsterW00-Negra','Roboto', sans-serif;
        color: #ffffff;
        padding: 150px 0 150px 0;
        text-align: center;
        font-size: 60px;
        font-size-adjust: 60px;
        text-shadow: 0 5px #292929;
        letter-spacing: 3px;
        word-spacing: 10px;
    }

    h1, h3 {
        margin: 50px;
    }

    h1 {
        margin-bottom: 0;
    }
`;
