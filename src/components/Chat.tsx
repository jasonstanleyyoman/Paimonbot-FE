import React from 'react';
import ChatBubble from "./ChatBubble";
import { Message } from '../types';
import LoadingAnimation from './LoadingAnimation';
import { CSSTransition } from "react-transition-group";

type Props = {
	isLoading: boolean,
	allMessage: Message[],
	message: string,
	setMessage: (m: string) => void;
	onSubmit: () => void,
	onLogout: () => void;

};

const Chat = ({
	allMessage,
	isLoading,
	onSubmit,
	message,
	setMessage,
	onLogout
}: Props): JSX.Element => {

	return (
		<div className="h-screen w-full items-center justify-center px-10 py-20 page-animation">
			<div className="w-full max-w-3xl h-full bg-yellow-400 rounded-md overflow-hidden flex flex-col justify-between items-stretch mx-auto">
				<div className="w-full h-12 bg-gray-600 flex px-4 items-center justify-between">
					<div className="px-2 py-1 cursor-pointer rounded bg-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300" onClick={() => onLogout()}>
						Logout
					</div>
					<div className="flex flex-row-reverse">
						<div className="h-5 w-5 bg-red-400 rounded-full ml-2"></div>
						<div className="h-5 w-5 bg-yellow-400 rounded-full ml-2"></div>
						<div className="h-5 w-5 bg-green-400 rounded-full"></div>
					</div>
				</div>
				<div className="h-full w-full px-4 py-1 bg-gray-400 overflow-y-scroll flex flex-col">
					<div className="self-center mt-2">Today</div>
					{
						allMessage.map((m, idx) => <ChatBubble key={idx} sender={m.sender} sent={m.sent} type={m.type} image={m.image} message={m.message}>{m.message}</ChatBubble>)
					}

				</div>
				<div className="w-full h-12 bg-gray-200 py-3 px-6 flex items-center border-t-4 border-transparent focus-within:border-yellow-100 transition duration-300 relative">
					<CSSTransition
						in={isLoading}
						timeout={300}
						unmountOnExit
						classNames="loading"
					>
						<LoadingAnimation />
					</CSSTransition>
					<form className="w-full flex" onSubmit={(e) => {
						e.preventDefault();
						onSubmit();
					}}>
						<input value={message} onChange={(e) => setMessage(e.currentTarget.value)} placeholder="Ask us here" className="bg-gray-300 rounded-full px-3 py-1 w-full focus:outline-none border-none text-right" />
						<button className="ml-4 active:scale-95 cursor-pointer border-none outline-none focus:outline-none text-sm text-gray-500 hover:text-gray-900 transition duration-300 general-button">Send</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Chat;