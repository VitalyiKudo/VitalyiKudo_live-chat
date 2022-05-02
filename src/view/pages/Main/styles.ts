// Core
import styled from 'styled-components';

export const Container = styled.div`
.main {
    text-align: center;
    background-image: url('https://funart.pro/uploads/posts/2021-04/1618513878_7-funart_pro-p-oboi-fon-fon-anime-noch-7.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
    header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
    .user-name {
        padding: 20px 0px;
        font-size: 30px;
    }
    .name-span {
        font-weight: bold;
    }
    .logout {
        position: relative;
        font-size: 16px;
        width: 250px;
        height: 30px;
        background-color: #3C9CEE;
        border: 1px solid black;
        margin: 2px 0px 0px 5px;
            &:hover {
                box-shadow: 0px 2px 5px -0.5px rgba(0,0,0,0.71);
                transition: 0.3s;
            } 
            @media (max-width: 408px) {
                height: 40px;
            }
    }
    .logout-image {
        position: absolute;
        top: 0px;
        right: 0px;
        width: 30px;
        height: 25px;
            @media (max-width: 408px) {
                top: 5px;
                rigth: 1px;
            }
    }
    .messages {
        display: flex;
        flex-direction: column-reverse;
    }
    .chat-section {
        display: flex;
        flex-direction: column-reverse;
        background-color:#314D6A;
        overflow: auto;
        border: 1px solid black;
        box-shadow: -1px 3px 5px -1px rgba(0,0,0,0.71);
        width: 800px;
        height: 700px;
        margin: 30px auto;
        @media (max-height: 1111px) {
            height: 850px;
        }
        @media (max-width: 700px) {
            width: 400px;
            height: 850px;
        }
        @media (max-width: 408px) {
            border: none;
            box-shadow: none;
            width: 100%;
        }
        .chat-message {
            padding: 10px;
        }
    }
    .entry-field {
        display: flex;
        justify-content: center;
        margin-top: -30px;
        .message-field {
            width: 694px;
            font-size: 20px;
            height: 40px;
            @media (max-width: 700px) {
                width: 294.5px;
            }
        }
        .submit {
            width: 100px;
            font-size: 17px;
            background-color: #3C9CEE;
            border: 1px solid black;
            /* &:hover {
                background-color: #00BFFF;
                transition: 0.4s;
                color: white;
            } */
        }
    }
    .keyboard-btn {
        margin-top: 10px;
        background-color: #3C9CEE;
        font-size: 17px;
        border: 1px solid black;
        width: 200px;
        height: 30px;
    }
}
`;
