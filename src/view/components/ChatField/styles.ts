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
    .chat-section {
        display: flex;
        flex-direction: column-reverse;
        background-color:#C9C5E6;
        overflow: auto;
        width: 450px;
        height: 900px;
        margin: 20px auto;
        .chat-message {
            padding: 20px;
        }
    }
    .entry-field {
        position: sticky;
        display: flex;
        /* top: 900px; */
        /* bottom: 0px; */
        .message {
            /* margin-right: 50px; */
            font-size: 20px;
            width: 80%;
            height: 40px;
        }
        .submit {
            background-color: #F2B5D4;
            border: 1px solid black;
            width: 20%;
        }
    }
}
`;
