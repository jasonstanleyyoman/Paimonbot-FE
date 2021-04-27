import React from 'react';
import Chat from "./components/Chat"
import Auth from "./components/Auth"
import { KeqingStudy, ZhongliQuestion, DilucNote,DilucSent, Hutao } from "./assets"
import { Message } from "./types"
import { useSocket } from './context/socket'
import { CSSTransition } from "react-transition-group"

import './App.css';

const idToSticker = (id : number) : string => {
  const mapper = {
    0 : ZhongliQuestion,
    1 : DilucNote,
    2 : KeqingStudy,
    3 : KeqingStudy,
    4 : Hutao,
    5 : DilucSent
  }
  return mapper[id];
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [allMessage, setAllMessage] = React.useState<Message[]>([]);
  const socket = useSocket();

  const handleMessage = React.useCallback((data) => {
    setAllMessage([
      ...allMessage,
      {
        sender : "bot",
        sent : new Date(),
        type : "text",
        message : data.message
      }
    ])
    setIsLoading(false);
  }, [allMessage])
  const handleSticker = React.useCallback((data) => {
    setAllMessage([
      ...allMessage,
      {
        sender : "bot",
        sent : new Date(),
        type : "sticker",
        image : idToSticker(data)
      }
    ])
    setIsLoading(false);

  }, [allMessage])

  React.useEffect(() => {
    // socket.connect();
    if (socket.socket) {
      socket.socket.on("message", handleMessage)
  
      socket.socket.on("sticker", handleSticker)
    }
  }, [socket.socket, handleSticker, handleMessage])

  const handleSubmit = async () => {
    if (message.length > 0 && !isLoading) {
      setIsLoading(true);

      setAllMessage([...allMessage, {
        sender : "self",
        message : message,
        sent : new Date(),
        type : "text"
      }])
      socket.socket.emit("message", {
        message : message
      })
    }
  }
  const onLoggedInSuccess = () => {
    setIsLoggedIn(true);
  }
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
}

export default App;
