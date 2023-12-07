import React from 'react';
interface ChatBotProps {
    closeChatBot: () => void;
    step: boolean;
}
declare const ChatBot: React.FC<ChatBotProps>;
export default ChatBot;
