import React from 'react';
import logo from './logo.svg';
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
          <div className="h-full w-full px-2 py-1 bg-gray-400 overflow-y-auto flex flex-col">
            <div className="self-center">Today</div>
            <div className="self-end flex flex-col items-end">
              <p className="text-gray-600 mr-2 text-md">You</p>
              <div className="self-end px-4 max-w-full bg-blue-300 rounded-xl">
                Ping
              </div>
              <p className="text-xs mr-1 mt-1 text-gray-300">19:12</p>
            </div>

            <div className="flex flex-col items-start">
              <img className="w-8 rounded-full mb-2 border-2 border-gray-500" src="https://previews.123rf.com/images/vikasuh/vikasuh1107/vikasuh110700323/10042501-funny-white-robot-stay-show-hello.jpg" />
              <div className="px-4 max-w-full bg-blue-300 rounded-xl">
                Halo ada yang bisa saya bantu ?
              </div>
              <p className="text-xs ml-1 mt-1 text-gray-300">19:13</p>
            </div>
          </div>
          <div className="w-full h-12 bg-gray-200 py-3 px-6 flex items-center border-t-4 border-transparent focus-within:border-green-300 transition duration-300">
            <input placeholder="Ask us here" className="bg-gray-300 rounded-full px-3 py-1 w-full focus:outline-none border-none text-right" />
            <button className="ml-4 cursor-pointer border-none outline-none focus:outline-none text-sm text-gray-500 hover:text-gray-900 transition duration-300">Send</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
