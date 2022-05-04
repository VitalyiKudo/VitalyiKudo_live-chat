import styled from 'styled-components';

export const Media = styled.div`
@media (max-width: 1440px) {
    .message,
    .my-message {
        width: 280px;
    }
    .edit {
        width: 300px;
        .edit-field {
            width: 218px;
        }
        .buttons {
            left: 17px;
        }
        .my-create-date {
            padding-left: 240px;
        }
    }
}

@media (max-width: 1024px) {
    .message,
    .my-message {
        width: 220px;
    }
    .buttons {
        left: 10px;
    }
    .edit-status,
    .my-edit-status {
        left: 13px;
    }
    .edit {
        width: 250px;
        .edit-field {
            width: 184px;
        }

        .buttons {
            left: 10px;
        }
    }
}

@media (max-width: 570px) {
    .get-buttons {
        display: block;
    }
    .mobile-buttons {
        display: flex;
        flex-direction: column;
    }
    .buttons {
        display: none;
    }
    .message,
    .my-message {
        width: 220px;
    }
    .edit {
        width: 240px;
        .edit-field {
            font-size: 16px;
            width: 185px;
        }
        .edit-btn {
            height: 25px;
        }
    }
}

@media (max-width: 530px) {
    .message,
    .my-message {
        width: 200px;
    }
    .edit {
        width: 220px;
        .edit-field {
            width: 180px;
        }
    }
}

@media (max-width: 480px) {
    .message,
    .my-message {
        width: 180px;
    }
    .edit {
        width: 200px;
        .edit-field {
            width: 159px;
        }
    }
}
@media (max-width: 410px) {
    .message,
    .my-message {
        width: 160px;
    }
    .edit {
        width: 180px;
        .edit-field {
            width: 139px;
        }
    }
}
@media (max-width: 370px) {
    .message,
    .my-message {
        width: 140px;
    }
    .edit {
        width: 160px;
        .edit-field {
            width: 119px;
        }
    }
}
@media (max-width: 340px) {
    .message,
    .my-message {
        width: 130px;
    }
    .edit {
        width: 150px;
        .edit-field {
            width: 109px;
        }
    }
}
`;
