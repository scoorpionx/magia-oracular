import styled from 'styled-components';

export const Div = styled.div`
    display: grid;
    background: #ffffff;
    
    .text {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 20px 0 10px 0;
        font-size: 30px;
    }
    
    h1 {
        font-family: 'AmsterW00-Negra','Roboto', sans-serif;
        padding-bottom: 15px;
    }

    span, h3 {
        font-family: 'Roboto', sans-serif;
    }

    .div-span {
        display: flex;
        flex-direction: column;
        padding: 10px auto 10px auto;
        margin: auto 20px auto 20px;
    }
    
    span {
        font-weight: 300;
        margin-top: 10px;
    }
    
    h3 {
        padding-top: 15px;
    }
    
    .div-form {
        display: flex;
        justify-content: center;
        height: auto;
    }

    .form {
        display: flex;
        flex-direction: column;
        padding: 10px;
        width: 80%;
    }
    
    input, .btn, .msg {
        font-family: 'Roboto', sans-serif;
        border: 1px solid #cccccc;
        border-radius: 5px;
        margin: 3px;
        box-sizing: border-box;
        cursor: pointer;
    }

    input, .msg {
        padding: 8px;
        resize: vertical;
        height: 100%;
        width: 100%;
        font-size: 50px;
    }

    input {
        height: 120px;
    }

    .msg {
        padding-top: 10px;
        height: 300px;
    }
    
    .div-btn {
        display: flex;
        flex-direction: row-reverse;
        width: 100.5%;
    }
    
    .btn {
        font-weight: 300;
        background-color: #ffffff;
        font-size: 50px;
        height: 120px;
        width: 170px;
        padding: 10px 8px 10px 8px;
        margin: 3px;
    }

    .btn:hover {
        background-color: #cccccc;
        font-weight: 400;
    }

    @media only screen and (min-width: 1164px) {
        .div-form {
            height: auto;
        }

        .form {
            width: 40%;
        }

        input, .msg {
            font-size: 20px;
        }

        input {
            height: auto;
        }

        .msg {
            height: 100px;
        }

        .btn {
            font-weight: 200;
            font-size: 30px;
            height: 70px;
            width: 120px;
            margin: 0;
            margin-top: 3px;
        }

        .btn:hover {
            font-weight: 300;
        }
    }

`;