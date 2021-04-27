import React from 'react'
import ChatBubble from "./ChatBubble"
import { Message } from '../types'

type Props = {
    isLoading: boolean,
    allMessage: Message[],
    message : string,
    setMessage : (m : string) => void
    onSubmit: () => void

}

const Chat = ({
    allMessage,
    isLoading,
    onSubmit,
    message,
    setMessage
}: Props) => {

    return (
        <div className="h-screen w-full items-center justify-center px-10 py-20 page-animation">
            <div className="w-full max-w-3xl h-full bg-yellow-400 rounded-md overflow-hidden flex flex-col justify-between items-stretch mx-auto">
                <div className="w-full h-12 bg-gray-600 flex px-4 items-center flex-row-reverse">
                    <div className="h-5 w-5 bg-red-400 rounded-full ml-2"></div>
                    <div className="h-5 w-5 bg-yellow-400 rounded-full ml-2"></div>
                    <div className="h-5 w-5 bg-green-400 rounded-full"></div>
                </div>
                <div className="h-full w-full px-4 py-1 bg-gray-400 overflow-y-scroll flex flex-col">
                    <div className="self-center mt-2">Today</div>
                    {
                        allMessage.map((m, idx) => <ChatBubble key={idx} sender={m.sender} sent={m.sent} type={m.type} image={m.image}>{m.message}</ChatBubble>)
                    }

                </div>
                <div className="w-full h-12 bg-gray-200 py-3 px-6 flex items-center border-t-4 border-transparent focus-within:border-yellow-100 transition duration-300 relative">
                    {/* <CSSTransition
                        in={isLoading}
                        timeout={300}
                        unmountOnExit
                        classNames="loading"
                    >
                        <LoadingAnimation />
                    </CSSTransition> */}
                    <form className="w-full flex" onSubmit={(e) => {
                        e.preventDefault();
                        onSubmit();
                    }}>
                        <input value={message} onChange={(e) => setMessage(e.currentTarget.value)} placeholder="Ask us here" className="bg-gray-300 rounded-full px-3 py-1 w-full focus:outline-none border-none text-right" />
                        <button className="ml-4 cursor-pointer border-none outline-none focus:outline-none text-sm text-gray-500 hover:text-gray-900 transition duration-300">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Chat