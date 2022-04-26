// Core
import styled from 'styled-components';

export const Container = styled.section`
.main {
    text-align: center;
    background-image: url('https://yokotafss.com/wp-content/uploads/2020/04/GettyImages-1160134500-1536x1024.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
    header {
    display: flex;
    justify-content: center;
    align-items: center;
    }
    .user-name {
        padding: 20px 0px;
        font-size: 22px;
        .name-span {
            font-weight: bold;
        }
    }
    .log-out {
        font-size: 16px;
        width: 8%;
        height: 4%;
        background-color: #F2B5D4;
        border: 1px solid black;
        margin: 2px 0px 0px 5px;
            &:hover {
                background-color: #00BFFF;
                transition: 0.4s;
                color: white;
            }
    }
    .messages {
        display: flex;
        flex-direction: column-reverse;
    }
    .chat-section {
        display: flex;
        flex-direction: column-reverse;
        background-color:#C9C5E6;
        overflow: auto;
        width: 500px;
        height: 900px;
        margin: 20px auto;
        .chat-message {
            padding: 20px;
        }
    }
}
.entry-field {
    display: flex;
    justify-content: center;
    margin-top: -19px;
    .message {
        width: 394.5px;
        font-size: 20px;
        height: 40px;
    }
    .submit {
        width: 100px;
        background-color: #F2B5D4;
        border: 1px solid black;
        &:hover {
            background-color: #00BFFF;
            transition: 0.4s;
            color: white;
        }
    }
}
`;
