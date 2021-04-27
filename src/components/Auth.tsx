import React from 'react'
import { useSocket } from "../context/socket"

type Mode = "login" | "register"
type Props = {
    onSuccess : () => void
}
const Auth : React.FC<Props> = ({
    onSuccess
} : Props) => {
    const [mode, setMode] = React.useState<Mode>("login");
    const [isLoading, setIsLoading] = React.useState(false);
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errorMessage, setErroMessage] = React.useState("");
    const socket = useSocket();
    if (socket.socket !== null) {
        
    }
    React.useEffect(() => {
        // socket.connect();
    }, [])
    React.useEffect(() => {
        setErroMessage("");
    }, [username, password])
    const handleSubmit = () => {
        if (mode === "login") {
            onSuccess();
        }

        if (mode === "register") {

        }
    }
    return(
        <div className="w-2/5 flex flex-col page-animation">
            <h1 className="text-5xl my-6 underline">{mode === "login" ? "Login" : "Register"}</h1>
            <input className="my-4 py-2 px-4 rounded-lg shadow-md text-xl border-gray-200 border-2 focus:border-gray-400 transition duration-300" value={username} placeholder="Username" onChange={(e) => setUsername(e.currentTarget.value)}/>
            <input className="my-4 py-2 px-4 rounded-lg shadow-md text-xl border-gray-200 border-2 focus:border-gray-400 transition duration-300" value={password} placeholder="Password" type="password" onChange={(e) => setPassword(e.currentTarget.value)}/>
            <p className="my-2 text-red-600 font-semibold">{errorMessage}</p>
            <button onClick={() => handleSubmit()} className="py-3 bg-green-300 rounded-xl hover:bg-green-400 transition text-lg">
                {mode === "login" ? "Login" : "Register"}
            </button>
            <button className="my-3 py-3 bg-indigo-300 rounded-xl hover:bg-indigo-400 transition text-lg" onClick={() => {
                setMode(mode === "login" ? "register" : "login");
            }}>
                {mode === "login" ? "Go to Register" : "Go to Login"}
            </button>
        </div>
    ) 
}



export default Auth