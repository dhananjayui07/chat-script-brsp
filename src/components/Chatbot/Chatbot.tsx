import React, { useEffect, useRef, useState } from 'react';
import styles from './chatbot.module.css';
import { Button, Form, Nav, Tab } from 'react-bootstrap';

interface ChatBotProps {
  closeChatBot: () => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ closeChatBot }) => {
  const messagesContainerRef = useRef<HTMLDivElement>(null!);
  const [messages, setMessages] = useState([
    { id: 1, text: '"Do you have an existing phone number you would like to keep?"', sender: 'bot' },
    { id: 2, text: 'Yes, I do have', sender: 'you' },
    {
      id: 2,
      text: '"Is there a new number you would like to search for such as a number ending with a particular last 4 digit?"',
      sender: 'bot',
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const sendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
        sender: 'you',
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };
  // show last message (scrolled to bottom)
  useEffect(() => {
    messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
  }, [messages]);
  return (
    <div className={`${styles.mainWrapBlue} rounded-top-4 d-flex flex-column`}>
      <div className="d-flex justify-content-between my-3 px-3">
        <h4 className="fs-4 fw-bold m-0">Agent Assist</h4>
        <span
          onClick={closeChatBot}
          className={`${styles.minimizeButton} d-flex justify-content-center align-items-center rounded-circle`}
        >
          <span className="material-icons">close</span>
        </span>
      </div>
      {/* chat body */}
      <Tab.Container defaultActiveKey="tabScript">
        {/* nav tabs */}
        <div className={`${styles.navWrap} mb-3 mx-3 p-2 rounded`}>
          <Nav variant="pills" className={`${styles.buttonsNavHome} gap-1 justify-content-between`}>
            <Nav.Item>
              <Nav.Link className="py-1 px-2 d-flex align-items-center gap-1" eventKey="tabScript">
                <span className="material-icons">description</span>
                Script
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="py-1 px-2 d-flex align-items-center gap-1" eventKey="tabHelp">
                <span className="material-icons">search</span>
                Help
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="py-1 px-2 d-flex align-items-center gap-1" eventKey="tabTranscript">
                <span className="material-icons">record_voice_over</span>
                Transcript
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className={`${styles.promptTabContainer} d-flex flex-column flex-grow-1`}>
          <Tab.Content className="flex-grow-1">
            <Tab.Pane eventKey="tabScript" className="h-100">
              {/* chat panel */}
              <div className="position-relative h-100">
                <div className={`${styles.chatPanelWrap} h-100 px-3`} ref={messagesContainerRef}>
                  <div className={`${styles.stepContent} mb-3`}>
                    <h4 className="fs-6 fw-bold">Step 3: Phone Configuration</h4>
                    <p className="m-0">
                      In this step, you can configure the phone line with calling features and offer phone number
                      porting or search for a prefered number for the customer
                    </p>
                  </div>
                  {/* chat messages */}
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`${message.sender === 'you' ? styles.sent : styles.received} mb-3 p-3 shadow-sm ${
                        styles.chatBubble
                      }`}
                    >
                      {message.text}
                    </div>
                  ))}
                </div>
                {/* input text box */}
                <div className="position-absolute bottom-0 end-0 start-0 px-3 py-2 bg-info d-flex gap-2">
                  <Form.Control
                    className={`${styles.inputText} rounded-5`}
                    placeholder="Type here..."
                    aria-label="Type"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <Button
                    onClick={sendMessage}
                    className={`${styles.sendButton} d-inline-flex bg-light justify-content-center align-items-center rounded-circle p-0`}
                  >
                    <span className="material-icons text-dark fs-5">send</span>
                  </Button>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="tabHelp">...</Tab.Pane>
            <Tab.Pane eventKey="tabTranscript">...</Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>
    </div>
  );
};

export default ChatBot;
