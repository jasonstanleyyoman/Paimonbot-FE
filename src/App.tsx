import React from 'react';
import Chat from "./components/Chat"
import Auth from "./components/Auth"
import { KeqingStudy, ZilongQuestion, DilucNote,DilucSent, Hutao } from "./assets"
import { Message } from "./types"
import { useSocket } from './context/socket'
import { CSSTransition } from "react-transition-group"

import './App.css';
const dummy: Message[] = [
  {
    sender: "self",
    sent: new Date(),
    message: "halo",
    type : "text"
  },
  {
    sender: "bot",
    sent: new Date(),
    message: "Ada yang bisa saya bantu ?",
    type : "text"
  },
  {
    sender: "bot",
    sent: new Date(),
    message: "Ada yang bisa saya bantu ?",
    type : "text"
  },
  {
    sender: "bot",
    sent: new Date(),
    message: "Ada yang bisa saya bantu ?",
    type : "text"
  },
  {
    sender: "bot",
    sent: new Date(),
    message: "Ada yang bisa saya bantu ?",
    type : "text"
  },
  {
    sender: "bot",
    sent: new Date(),
    type : "sticker",
    image : Hutao
  },
]
function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [allMessage, setAllMessage] = React.useState<Message[]>([...dummy]);
  const socket = useSocket();
  if (socket.socket) {
    socket.socket.on("connection", () => {

    })
  }
  

  React.useEffect(() => {
    // socket.connect();
  }, [])
  const addMessage = (toAdd : Message) => {
    const tempMessage : Message[] = [...allMessage, toAdd];
    setAllMessage(tempMessage);
    
  }
  const handleSpecialCommand = async () => {
    setIsLoading(true);
    setTimeout(() => {
      
    }, 2000)
  }
  const handleSubmit = async () => {
    if (message.startsWith("!")) {
      handleSpecialCommand();
      return;
    }
    if (message.length > 0 && !isLoading) {
      const tempMessage = [...allMessage]
      tempMessage.push({
        sender : "self",
        message : message,
        sent : new Date(),
        type : "text"
      });
      setAllMessage([...tempMessage])
      setIsLoading(true);
      setTimeout(() => {
        tempMessage.push({
          sender : "bot",
          sent : new Date(),
          type : "sticker",
          image : KeqingStudy
        })
        setAllMessage([...tempMessage])
        setMessage("");
        setIsLoading(false);
      }, 3000)
    }
  }
  const onLoggedInSuccess = () => {
    setIsLoggedIn(true);
  }
  return (
    <div className="App bg-gray-700 h-screen w-screen flex items-center justify-center">
      {
        isLoggedIn ?
        <CSSTransition
          in={isLoggedIn}
          timeout={300}
          unmountOnExit
          classNames="page"
        >
          <Chat 
            allMessage={allMessage}
            isLoading={isLoading}
            onSubmit={handleSubmit}
            message={message}
            setMessage={setMessage}
          />
        </CSSTransition> :
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
