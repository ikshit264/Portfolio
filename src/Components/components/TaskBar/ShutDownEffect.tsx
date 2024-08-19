import React, { useEffect } from 'react';

const ShutdownEffect: React.FC = () => {

    useEffect(() => {
        const shutdownSound = new Audio('/sounds/windows-xp-shutdown.wav');
        shutdownSound.play();
        setTimeout(() => {
            document.body.innerHTML = ''; // Clear the content of the page
            document.body.style.backgroundColor = 'black'; // Set background to black
        }, 4000);
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
            <div className="text-white text-xl fade-out">Shutting down...</div>
        </div>
    );
};

export default ShutdownEffect;
