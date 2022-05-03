// Core
import styled from 'styled-components';

export const Container = styled.div`
.message, .my-message {
overflow-wrap: break-word;
overflow: visible;
box-shadow: -1px 3px 5px -2px #000000;
border: 0.5px solid grey;
border-radius: 5%;
background-color: white;
width: 300px;
height: 80px;
}
.text, .my-text {
    padding: 15px 0px;
    font-size: 18px;
}
.create-date, .my-create-date {
    padding-left: 220px;
    font-size: 14px;
}
.edit-status, .my-edit-status {
    font-weight: bold;
}
.my-message {
    margin-left: 460px;
}
.edit-status {
    margin: -17px 200px 0px 0px;
}
.my-edit-status {
    margin: -60px 200px 0px 0px;
}
.name {
    color: #3C9CEE;
}
.my-name {
    color:  #20B2AA;
    padding-top: 5px;
    padding-left: 0px;
}
.buttons {
    margin: -76.5px 180px 100px 0px;
}
.message-btn {
    background-color: white;
    color:  #20B2AA;
    border: 0.5px solid black;
    width: 30px;
    font-size: 10px;
}
.edit {
    width: 340px;
    height: 80px;
    margin-left: 410px;
    .edit-field {
        height: 20px;
        margin: 10px 0px 10px 0px;
        width: 250px;
    }
    .edit-btn {
        border: 1px solid black;
        height: 26px;
    }
    .keep, .edit-btn {
        background-color:  #20B2AA;
        color: white;
    }
    .my-create-date {
        padding-left: 280px;
    }
    .buttons {
        margin-right: 243px;
        margin-bottom: 5px;
    }
}
`;

