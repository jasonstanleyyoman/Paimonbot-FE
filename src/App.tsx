import React from 'react';
import Chat from "./components/Chat"
import { Message } from "./types"
import { useSocket } from './context/socket'
import './App.css';
const dummy: Message[] = [
  {
    sender: "self",
    sent: new Date(),
    message: "halo"
  },
  {
    sender: "bot",
    sent: new Date(),
    message: "Ada yang bisa saya bantu ?"
  },
]
function App() {
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
  const handleSubmit = async () => {
    
    if (message.length > 0 && !isLoading) {
      const tempMessage = [...allMessage]
      tempMessage.push({
        sender : "self",
        message : message,
        sent : new Date()
      });
      setAllMessage([...tempMessage])
      setIsLoading(true);
      setTimeout(() => {
        tempMessage.push({
          sender : "bot",
          message : "Maaf saya tidak mengerti",
          sent : new Date()
        })
        setAllMessage([...tempMessage])
        setMessage("");
        setIsLoading(false);
      }, 3000)
    }
  }
  return (
    <div className="App">
      <Chat 
        allMessage={allMessage}
        isLoading={isLoading}
        onSubmit={handleSubmit}
        message={message}
        setMessage={setMessage}
      />
      {/* <button onClick={() => setIsLoading(!isLoading)}>Toggle</button> */}
    </div>
  );
}

export default App;
