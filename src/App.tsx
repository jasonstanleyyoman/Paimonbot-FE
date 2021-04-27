import React from 'react';
import ChatBubble from "./components/ChatBubble"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="h-screen bg-yellow-200 w-full items-center justify-center px-10 py-20">
        <div className="w-full max-w-3xl h-full bg-yellow-400 rounded-md overflow-hidden flex flex-col justify-between items-stretch mx-auto">
          <div className="w-full h-12 bg-gray-600 flex px-4 items-center flex-row-reverse">
            <div className="h-5 w-5 bg-red-400 rounded-full ml-2"></div>
            <div className="h-5 w-5 bg-yellow-400 rounded-full ml-2"></div>
            <div className="h-5 w-5 bg-green-400 rounded-full"></div>
          </div>
          <div className="h-full w-full px-4 py-1 bg-gray-400 overflow-y-auto flex flex-col scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300">
            <div className="self-center mt-2">Today</div>
            <ChatBubble sender="self" sent={new Date()}>
              Halo
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </ChatBubble>
            <ChatBubble sender="bot" sent={new Date()}>
              Ada yang bisa saya bantu ?
            </ChatBubble>

          </div>
          <div className="w-full h-12 bg-gray-200 py-3 px-6 flex items-center border-t-4 border-transparent focus-within:border-green-300 transition duration-300 relative">
            <span className="-top-5 w-full h-4 flex justify-center absolute">
              <div className="animate-customBounce w-2 h-2 rounded-full bg-yellow-200">

              </div>
              <div className="animate-customBounce w-2 h-2 rounded-full bg-yellow-200 mx-2 delay-200">

              </div>
              <div className="animate-customBounce w-2 h-2 rounded-full bg-yellow-200 delay-400">

              </div>
            </span>
            <input placeholder="Ask us here" className="bg-gray-300 rounded-full px-3 py-1 w-full focus:outline-none border-none text-right" />
            <button className="ml-4 cursor-pointer border-none outline-none focus:outline-none text-sm text-gray-500 hover:text-gray-900 transition duration-300">Send</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
