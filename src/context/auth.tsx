import React from 'react'

interface IAuth {
    
}
const AuthContext = React.createContext<IAuth>(null);

const useAuth = () => React.useContext<IAuth>(AuthContext)

type Props = {
    children? : React.ReactNode
}

const AuthProvider = ({
    children
} : Props) => {
    const [username, setUsername] = React.useState("");
}