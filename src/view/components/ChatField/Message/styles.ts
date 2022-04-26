// Core
import styled from 'styled-components';

export const Container = styled.section`
.message, .my-message {
overflow-wrap: break-word;
overflow: visible;
box-shadow: -1px 3px 5px -2px #000000;
border: 0.5px solid grey;
border-radius: 6%;
background-color: white;
width: 160px;
height: 80px;
}
.text, .my-text {
    padding: 15px 0px;
}
.create-date, .my-create-date {
    padding-left: 85px;
    font-size: 14px;
}
.my-message {
    margin-left: 290px;
}
.name {
    color: #FF69B4;
}
.my-name {
    color: #00BFFF;
    padding-top: 5px;
    padding-left: 70px;
}
.buttons {
    margin: -76.5px 80px 100px 0px;
}
.message-btn {
    background-color: white;
    color: #00BFFF;
    border: 0.5px solid black;
    width: 30px;
    font-size: 10px;
}
.edit {
    width: 250px;
    height: 90px;
    margin-left: 200px;
    .edit-field {
        margin-top: 22px;
        margin-bottom: 5px;
    }
    .edit-btn {
        border: 1px solid black;
        height: 21px;
    }
    .keep, .edit-btn {
        background-color: #00BFFF;
        color: white;
    }
    .my-create-date {
        padding-left: 180px;
    }
    .buttons {
        margin-right: 160px;
        margin-bottom: 5px;
    }
}
`;

