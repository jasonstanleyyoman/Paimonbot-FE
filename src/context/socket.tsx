import React from 'react'
import io from "socket.io-client"
import { socket_url } from "../../config"
interface ISocket {
    socket : SocketIOClient.Socket
}

const SocketContext = React.createContext<ISocket>(null);

const useSocket = React.useContext<ISocket>(SocketContext);
type Props = {
    children? : React.ReactNode
}

const SocketProvider = ({
    children
} : Props) => {
    const [socket, setSocket] = React.useState<SocketIOClient.Socket>(null);
    React.useEffect(() => {
        const client : SocketIOClient.Socket = io(socket_url);
        setSocket(client);
    }, [])
    return <SocketContext.Provider
        value={{
            socket : socket
        }}
    >
        {children}
    </SocketContext.Provider>
}

export default SocketProvider
export {
    useSocket
}