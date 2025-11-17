import React, { useState, useEffect } from 'react';

const InteractiveBackground: React.FC = () => {
  const [transform, setTransform] = useState('translate(-50%, -50%)');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const moveX = (clientX - innerWidth / 2) / (innerWidth / 2) * -15; // Move up to 15px
      const moveY = (clientY - innerHeight / 2) / (innerHeight / 2) * -15;

      setTransform(`translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden">
        <div 
            className="absolute top-1/2 left-1/2 w-[110vw] h-[110vh] bg-cover bg-center transition-transform duration-300 ease-out"
            style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=2592&auto=format&fit=crop')",
                transform: transform,
             }}
        />
        <div className="absolute inset-0 bg-verba-navy-dark/70 backdrop-blur-[2px]"></div>
    </div>
  );
};

export default InteractiveBackground;
