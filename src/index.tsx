import React, { useState } from 'react';
import styles from './styles.module.css';
import { ChatBot } from './components/Chatbot';

// type ChatComponentProps = {
//   contentText?: string;
// };

export const ChatComponent: React.FC = () => {
  const [showChat, setShowChat] = useState(true);
  const closeChatBot = () => {
    setShowChat(false);
  };
  return <div className={styles.root}>{showChat && <ChatBot closeChatBot={closeChatBot} />}</div>;
};
