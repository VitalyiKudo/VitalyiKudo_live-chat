// Core
import styled from 'styled-components';

export const Container = styled.div`
.entry-field {
    display: flex;
    justify-content: center;
    margin-top: -30px;
    .message-field {
        width: 694px;
        font-size: 20px;
        height: 40px;
    }
    .submit {
        width: 100px;
        font-size: 17px;
        background-color: #3C9CEE;
        border: 1px solid black;
    }
    @media (max-width: 1440px) {
        .message-field {
            width: 600px;
        }
        .submit {
            width: 95px;
        }
    }
    @media (max-width: 1024px) {
        .message-field {
            width: 478px;
        }
        .submit {
            width: 68px;
        }
    }
    @media (max-width: 570px) {
        .message-field {
            width: 85%;
        }
        .submit {
            width: 15%;
        }
    }
    @media (max-width: 370px) {
        .submit {
            font-size: 15px;
        }
    }
    @media (max-width: 340px) {
        .submit {
            font-size: 13px;
        }
    }
}
`;
