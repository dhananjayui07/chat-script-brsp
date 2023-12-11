import React from 'react';
import styles from './styles.module.css';
import { ChatbotComponent } from './components/chatbot-component';
export const ChatComponent = () => {
  return (
    <div className={styles.root}>
      <ChatbotComponent />
    </div>
  );
};
