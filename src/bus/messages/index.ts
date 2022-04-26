// Core
// import { useEffect } from 'react';

// Tools
import { useEffect } from 'react';
import { useSelector } from '../../tools/hooks';
import { useMessagesSaga } from './saga';

// Saga
// import { useMessagesSaga } from './saga';

export const useMessages = () => {
    const { fetchMessages, createMessage, editMessage, deleteMessage } = useMessagesSaga();
    const messages = useSelector((state) => state.messages.messages); // Add messages to ./src/init/redux/index.ts
    const message = useSelector((state) => state.messages.message);

    useEffect(() => {
        fetchMessages();
    }, [ message ]);

    return {
        messages,
        createMessage,
        editMessage,
        deleteMessage,
    };
};
