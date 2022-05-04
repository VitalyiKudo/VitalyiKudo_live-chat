// Core
import styled from 'styled-components';

export const Container = styled.div`
.chat-section {
    display: flex;
    flex-direction: column-reverse;
    background-color:#314D6A;
    overflow: auto;
    border: 1px solid black;
    box-shadow: -1px 3px 5px -1px rgba(0,0,0,0.71);
    width: 800px;
    height: 600px;
    margin: 30px auto;
    .chat-message {
        display: flex;
        padding: 10px;
    }
    .my-chat-message {
        display: flex;
        justify-content: end;
        padding: 10px;
    }
    @media (max-width: 1440px) {
        width: 700px;
    }
    @media (max-width: 1024px) {
        width: 550px;
    }
    @media (max-width: 570px) {
        width: 99%;
    }
}
`;
