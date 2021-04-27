import React from 'react';

const LoadingAnimation: React.FC = () => {
    return (
        <span className="-top-5 w-full h-4 flex justify-center absolute">
            <div className="animate-customBounce w-2 h-2 rounded-full bg-yellow-200">

            </div>
            <div className="animate-customBounce w-2 h-2 rounded-full bg-yellow-200 mx-2 delay-200">

            </div>
            <div className="animate-customBounce w-2 h-2 rounded-full bg-yellow-200 delay-400">

            </div>
        </span>
    )
}

export default LoadingAnimation