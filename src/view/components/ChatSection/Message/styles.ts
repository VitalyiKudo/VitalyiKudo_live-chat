// Core
import styled from 'styled-components';

export const Container = styled.div`
.message, .my-message {
position: relative;
overflow-wrap: break-word;
overflow: visible;
box-shadow: -1px 3px 5px -2px #000000;
border: 0.5px solid grey;
border-radius: 15px;
background-color: white;
min-width: 300px;
max-width: 350px;
min-height: 80px;
}
.name, .my-name {
    font-size: 18px;
}
.text, .my-text {
    text-align: left;
    padding: 15px 15px;
    font-size: 18px;
}
.create-date, .my-create-date {
    position: absolute;
    bottom: 5px;
    right: 5px;
    font-size: 14px;
}
.edit-status, .my-edit-status {
    padding-left: 13px;
    text-align: left;
    font-weight: bold;
}
.name {
    color: #3C9CEE;
}
header {
    display: flex;
}
.buttons {
    margin: 5px 18% 0px 5px;
}
.my-name {
    color:  #20B2AA;
    padding-top: 5px;
    padding-left: 0px;
}
.message-btn {
    background-color: white;
    color:  #20B2AA;
    border: 0.5px solid black;
    height: 20px;
    width: 40px;
    font-size: 10px;
}
.edit {
    width: 340px;
    height: 80px;
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
    .my-edit-status {
        display: none;
    }
}
.mobile {
    display: none;
}
`;

