// Core
import React, { FC } from 'react';
import { Message } from './Message';

// Bus
import { useMessages } from '../../../bus/messages';

// Styles
import * as S from './styles';
import { useUser } from '../../../bus/user';

export const ChatSection: FC = () => {
    const { messages } = useMessages();
    const { user } = useUser();

    return (
        <S.Container>
            <div className = 'chat-section'>
                <div className = 'messages'>
                    {messages?.map((message: any) => (
                        <div
                            className = { message.username === user?.username ? 'my-chat-message' : 'chat-message' }
                            key = { message._id } >
                            <Message
                                { ...message }
                            />
                        </div>
                        ))}
                </div>
            </div>
        </S.Container>
    );
};
