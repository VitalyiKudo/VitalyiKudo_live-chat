// Core
import React, { FC } from 'react';
import { Message } from './Message';

// Bus
import { useMessages } from '../../../bus/messages';

// Styles
import * as S from './styles';

export const ChatSection: FC = () => {
    const { messages } = useMessages();

    return (
        <S.Container>
            <div className = 'chat-section'>
                <div className = 'messages'>
                    {messages?.map((messages: any) => (
                        <div
                            className = 'chat-message'
                            key = { messages._id } >
                            <Message
                                { ...messages }
                            />
                        </div>
                        ))}
                </div>
            </div>
        </S.Container>
    );
};
