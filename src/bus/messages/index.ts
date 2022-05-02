// Core
import { useEffect } from 'react';

// Tools
import { useSelector } from '../../tools/hooks';

// Saga
import { useMessagesSaga } from './saga';

export const useMessages = () => {
    const { fetchMessages, createMessage, editMessage, deleteMessage } = useMessagesSaga();
    const messages = useSelector((state) => state.messages.messages); // Add messages to ./src/init/redux/index.ts
    const message = useSelector((state) => state.messages.message);

    useEffect(() => {
        setTimeout(fetchMessages, 3000);
    }, [ messages ]);

    return {
        message,
        messages,
        fetchMessages,
        createMessage,
        editMessage,
        deleteMessage,
    };
};
