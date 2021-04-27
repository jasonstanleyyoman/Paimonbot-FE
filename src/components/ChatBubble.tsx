import React from 'react';

type Props = {
    children?: React.ReactNode,
    sender: "bot" | "self",
    sent: Date
}

const formatDate = (date : Date) : string => {
    return `${date.getHours()}:${date.getMinutes()}`;
}

const ChatBubble: React.FC<Props> = ({
    children,
    sender,
    sent
}) => {
    return (
        <div className={`${sender === "self" ? "self-end" : ""} flex flex-col items-${sender === "bot" ? "start" : "end"}`}>
            {sender === "bot" ?
                <img className="w-8 rounded-full mb-2 border-2 border-gray-500" src="https://previews.123rf.com/images/vikasuh/vikasuh1107/vikasuh110700323/10042501-funny-white-robot-stay-show-hello.jpg" /> :
                <p className="text-gray-600 mr-2 text-xl">You</p>
            }
            <div className={`${sender === "self" ? "self-end" : ""} px-4 max-w-full bg-blue-300 rounded-xl`}>
                {children}
            </div>
            <p className="text-s mr-1 mt-1 text-gray-900">{formatDate(sent)}</p>
        </div>
    )
}

export default ChatBubble