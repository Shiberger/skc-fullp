import React, { useState, useEffect } from 'react';

const FadeInComponent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect when the component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h1 className="text-3xl">Hello, I am fading in!</h1>
    </div>
  );
};

export default FadeInComponent;
