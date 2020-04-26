import styled from 'styled-components';

export const Div = styled.div`
    background: #ffffff;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    left:0;
    bottom:0;
    right:0;
    align-items: center;
    font-size: 25px;

    .icons {
        display: flex;
    }

    .instagram-icon, .facebook-icon {
        font-size: 50px;
        color: #000000;
        cursor: pointer;
    }

    .instagram-icon {
        padding: 10px;
        margin: 10px;
    }

    .facebook-icon {
        padding: 10px;
        margin: 10px;
    }

    @media only screen and (min-width: 1164px) {
        font-size: 17px;
        
        .instagram-icon, .facebook-icon {
            font-size: 27px;
        }

        .instagram-icon {
            padding: 4px;
            margin: 4px;
        }

        .facebook-icon {
            padding: 4px;
            margin: 4px;
        }
    }
    
`;