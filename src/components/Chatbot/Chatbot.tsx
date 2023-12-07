import React from 'react';
import ChatbotHelpContent from './chatbot-help';
// import ChatbotScriptContent from './chatbot-script';
import MockChatComponent from './chatbot-script/mock-chat';
import MockChatComponentOne from './chatbot-script/mock-chat-one';
import ChatBotTabs from './chatbot-tabs';
import ChatbotTranscriptContent from './chatbot-transcript';
import styles from './chatbot.module.css';

interface ChatBotProps {
	closeChatBot: () => void;
	step: boolean;
}

let scriptContent: React.ReactNode = <MockChatComponent />;

const ChatBot: React.FC<ChatBotProps> = ({ closeChatBot, step }) => {
	if (step === true) {
		scriptContent = <MockChatComponentOne />;
	} else {
		scriptContent = <MockChatComponent />;
	}
	const tabs = [
		{ id: 'tab1', label: 'Script', content: scriptContent },
		{ id: 'tab2', label: 'Help', content: <ChatbotHelpContent /> },
		{ id: 'tab3', label: 'Transcript', content: <ChatbotTranscriptContent /> },
	];
	return (
		<>
			<div className={`${styles.mainWrapBlue} rounded-t-xl flex flex-col`}>
				{/* window header */}
				<div className="flex justify-between my-4 px-3">
					<h4 className="text-2xl font-medium m-0">Agent Assist</h4>
					<button type="button" onClick={closeChatBot} className="flex justify-center items-center rounded-full">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				{/* window content wrapper */}
				<div>
					<ChatBotTabs tabs={tabs} />
				</div>
			</div>
		</>
	);
};
export default ChatBot;
