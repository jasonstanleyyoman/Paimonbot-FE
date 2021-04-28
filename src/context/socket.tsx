import React from 'react'
import io from "socket.io-client"
import { socket_url } from "../config"
interface ISocket {
    socket : SocketIOClient.Socket,
    connect : () => void
}

const SocketContext = React.createContext<ISocket>(null);

const useSocket = () : ISocket => React.useContext<ISocket>(SocketContext);
type Props = {
    children? : React.ReactNode
}

const SocketProvider : React.FC<Props> = ({
    children
} : Props) => {
    const [socket, setSocket] = React.useState<SocketIOClient.Socket>(null);
    const connect = () => {
        if (socket === null || !socket.connected) {
            const client : SocketIOClient.Socket = io(socket_url);
            setSocket(client);
        }
    }
    return <SocketContext.Provider
        value={{
            socket : socket,
            connect : () => connect()
        }}
    >
        {children}
    </SocketContext.Provider>
}

export default SocketProvider
export {
    useSocket
}