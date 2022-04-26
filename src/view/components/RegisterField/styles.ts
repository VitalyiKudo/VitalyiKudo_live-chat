// Core
import styled from 'styled-components';

export const Container = styled.section`
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('https://yokotafss.com/wp-content/uploads/2020/04/GettyImages-1160134500-1536x1024.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
}
/* .line {
    width: 1000px;
    height: 150;
    background-color: blue;
} */
.fields-section {
    width: 800px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid #00BFFF;
    /* box-shadow: -1px 4px 5px -1px rgba(0,0,0,0.72); */
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
    }
}
`;
