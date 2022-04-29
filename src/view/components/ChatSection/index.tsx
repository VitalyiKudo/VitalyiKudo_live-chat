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
                    {messages?.map((messages, index) => (
                        <div
                            className = 'chat-message'
                            key = { index } >
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
