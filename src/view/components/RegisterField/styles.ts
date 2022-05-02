// Core
import styled from 'styled-components';

export const Container = styled.div`
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('https://funart.pro/uploads/posts/2021-04/1618513878_7-funart_pro-p-oboi-fon-fon-anime-noch-7.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
}
.fields-section {
    width: 800px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 3px solid white;
    box-shadow: -1px 3px 5px -1px rgba(0,0,0,0.71);
    @media (max-width: 850px) {
        width: 650px;
    }
    @media (max-width: 670px) {
        width: 600px;
        height: 600px;
    }
    @media (max-width: 600px) {
        border-right: none;
        border-left: none;
        box-shadow: none;
        width: 100%;
    }
    .chat-image {
        width: 100px;
        height: 100px;
    }
    .chat-name {
        font-size: 30px;
        font-weight: 550;
    }
    .field-heading {
        margin-top: 20px;
        font-size: 20px;
    }
    .for-field {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
    }
    .field {
            width: 480px;
            height: 35px;
            margin-bottom: 5px;
            font-size: 20px;
        }
        .submit {
            width: 488px;
            height: 40px;
            font-size: 20px;
            color: white;
            border: 1px solid black;
            background-color: #00BFFF;
            &:hover {
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
                transition: 0.4s;
                background-color:  #FF69B4;
            }
        }
        @media (max-width: 510px) {
            .field {
                width: 400px;
            }
            .submit {
                width: 408px;
            }
        @media (max-width: 430px) {
            .field {
                width: 300px;
            }
            .submit {
                width: 308px;
            }    
    }
}
}
`;
