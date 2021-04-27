import React from 'react';
import { Paimon } from "../assets"
import { bot_name, default_username } from "../config"
type Props = {
    children?: React.ReactNode,
    sender: "bot" | "self",
    sent: Date,
    type : "sticker" | "text",
    image? : string
}

const formatDate = (date : Date) : string => {
    return `${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`;
}

const getUsername = () => localStorage.getItem("username") || default_username

const ChatBubble: React.FC<Props> = ({
    children,
    sender,
    sent,
    type,
    image
}) => {
    return (
        <div className={`${sender === "self" ? "self-end" : ""} flex flex-col items-${sender === "bot" ? "start" : "end"} my-2`}>
            {sender === "bot" ?
                <div className="flex items-center">
                    <img className="w-10 rounded-full mb-2 border-2 border-gray-500" alt="Bot" src={Paimon} />
                    <p className="text-gray-600 text-xl ml-2">{bot_name}</p>
                </div> :
                <p className="text-gray-600 mr-2 text-xl">{getUsername()}</p>
            }
            <div className={`${sender === "self" ? "self-end" : ""} max-w-full`}>
                {
                    type === "text" ?
                    <p className="px-4 max-w-full bg-blue-300 rounded-xl">{children}</p> :
                    <img 
                        className="w-40"
                        src={image}
                    />
                }
            </div>
            <p className="text-s mr-1 mt-1 text-gray-900">{formatDate(sent)}</p>
        </div>
    )
}

export default ChatBubble