import React from 'react';

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
                <img className="w-8 rounded-full mb-2 border-2 border-gray-500" alt="Bot" src="https://previews.123rf.com/images/vikasuh/vikasuh1107/vikasuh110700323/10042501-funny-white-robot-stay-show-hello.jpg" /> :
                <p className="text-gray-600 mr-2 text-xl">You</p>
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