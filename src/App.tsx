import React from 'react';
import Chat from "./components/Chat";
import Auth from "./components/Auth";
import { KeqingStudy, ZhongliQuestion, DilucNote, DilucSent, Hutao } from "./assets";
import { Message } from "./types";
import { useSocket } from './context/socket';
import { CSSTransition } from "react-transition-group";

import './App.css';

const idToSticker = (id: number): string => {
	const mapper = {
		0: ZhongliQuestion,
		1: DilucNote,
		2: KeqingStudy,
		3: KeqingStudy,
		4: Hutao,
		5: DilucSent
	};
	return mapper[id];
};

const App: React.FC = () => {
	const [isLoggedIn, setIsLoggedIn] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(false);
	const [message, setMessage] = React.useState("");
	const [allMessage, setAllMessage] = React.useState<Message[]>([]);
	const socket = useSocket();

	const onLogout = () => {
		if (socket.socket) socket.socket.close();
		setAllMessage([]);
		setIsLoggedIn(false);
	}

	const handleMessage = React.useCallback((data) => {
		setAllMessage([
			...allMessage,
			{
				sender: "bot",
				sent: new Date(),
				type: "text",
				message: data.message
			}
		]);
		setIsLoading(false);
	}, [allMessage]);

	const handleSticker = React.useCallback((data) => {
		setAllMessage([
			...allMessage,
			{
				sender: "bot",
				sent: new Date(),
				type: "sticker",
				image: idToSticker(data)
			}
		]);
		setIsLoading(false);

	}, [allMessage]);

	const handleLogout = React.useCallback(() => {
		setIsLoggedIn(false)
	}, [isLoading])

	React.useEffect(() => {
		if (socket.socket) {
			socket.socket.on("disconnect", handleLogout)
		}
	}, [socket.socket, handleLogout])

	React.useEffect(() => {
		if (socket.socket) {
			socket.socket.on("message", handleMessage);
		}
	}, [socket.socket, handleMessage]);

	React.useEffect(() => {
		if (socket.socket) {
			socket.socket.on("sticker", handleSticker);
		}
	}, [socket.socket, handleSticker])

	const handleSubmit = async () => {
		if (message.length > 0 && !isLoading) {
			setIsLoading(true);

			setAllMessage([...allMessage, {
				sender: "self",
				message: message,
				sent: new Date(),
				type: "text"
			}]);
			socket.socket.emit("message", {
				message: message
			});
			setMessage("");
		}
	};
	const onLoggedInSuccess = () => {
		setIsLoggedIn(true);
	};
	return (
		<div className="App bg-gray-700 h-screen w-screen flex items-center justify-center">
			{
				isLoggedIn ?
					<Chat
						allMessage={allMessage}
						isLoading={isLoading}
						onSubmit={handleSubmit}
						message={message}
						setMessage={setMessage}
						onLogout={onLogout}
					/>
					:
					<CSSTransition
						in={!isLoggedIn}
						timeout={300}
						unmountOnExit
						classNames="page"
					>
						<Auth
							onSuccess={onLoggedInSuccess}
						/>
					</CSSTransition>
			}

		</div>
	);
};

export default App;
