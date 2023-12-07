import React, { useState } from 'react';

interface Message {
	text: string;
	isUser: boolean;
	isTitle?: boolean;
	isInstruction?: boolean;
}

const MockChatComponent: React.FC = () => {
	const [messages, setMessages] = useState<Message[]>([
		{
			text: '<h3 class="m-0 text-[18px] font-semibold">Enter Service Address</h3>',
			isUser: false,
			isTitle: true,
		},
		{
			text: '<p class="m-0">Enter the service address for the customer to see what products we can offer them. If no products are available, ask if we can get their contact information and let them know when service becomes available in their area.</p>',
			isUser: false,
			isInstruction: true,
		},
		{
			text: '<p class="m-0">“What address are you seeking service for?”</p>',
			isUser: false,
		},
		{
			text: `<p class="m-0">“Do you currently reside at this address, or are you moving to this address?”</p>`,
			isUser: false,
		},
	]);

	const [userInput, setUserInput] = useState<string>('');
	const [inputVisible, setInputVisible] = useState<boolean>(true);

	const handleSendMessage = () => {
		if (userInput.trim() === '') {
			// Don't send empty messages
			return;
		}

		// Add user's message to the chat
		const newUserMessage: Message = { text: userInput, isUser: true };
		setMessages([...messages, newUserMessage]);

		// Simulate API response (dummy response)
		const dummyResponse = `This is a dummy script for the response of user input: "${userInput}" `;

		// Add dummy response to the chat after a short delay
		setTimeout(() => {
			setMessages((prevMessages) => [...prevMessages, { text: dummyResponse, isUser: false }]);
		}, 500);

		// Hide the input field
		setInputVisible(false);

		// Clear the input field
		setUserInput('');
	};

	return (
		<div>
			{messages.map((message, index) => (
				<div
					key={index}
					className={`${
						message.isUser
							? 'text-black text-sm leading-5 items-stretch rounded-t-3xl rounded-bl-3xl shadow-sm bg-sky-400 mt-2 mb-4 p-4'
							: message.isInstruction
							  ? 'text-black text-sm leading-5 mt-2 mb-4'
							  : message.isTitle
							    ? 'text-black leading-6 mt-2 mb-4'
							    : 'text-black text-sm leading-5 items-stretch rounded-t-3xl rounded-br-3xl shadow-sm bg-sky-200 justify-center mt-2 mb-4 p-4'
					}`}
					dangerouslySetInnerHTML={{ __html: message.text }}
				/>
			))}
			{inputVisible && (
				<div className="mt-2 mb-4 flex rounded-md shadow-sm">
					<div className="relative flex flex-grow items-stretch focus-within:z-10">
						<input
							type="text"
							value={userInput}
							onChange={(e) => setUserInput(e.target.value)}
							className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
							placeholder="Enter text"
						/>
					</div>
					<button
						type="button"
						onClick={handleSendMessage}
						className="relative -ml-px inline-flex items-center rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
					>
						<span className="material-icons text-dark fs-5">send</span>
					</button>
				</div>
			)}
		</div>
	);
};

export default MockChatComponent;
