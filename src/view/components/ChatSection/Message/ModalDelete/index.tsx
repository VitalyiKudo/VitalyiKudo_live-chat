// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

export const ModalDelete: FC = () => {
    return (
        <div className = 'modal'>
            <div className = 'modal-content'>
                <h1>Delete message</h1>
                <button>Ok</button>
                <button>Cancel</button>
            </div>
        </div>
    );
};
