import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Florafy = () => {
  const [text, helper] = useTypewriter({
    words: ['Florafy'],       // ✅ Correctly defined words array
    loop: 0,                  // Types once and stops
    typeSpeed: 120,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  const { isType, isDelete, isDelay, isDone } = helper;

  return (
    <div className="text-4xl font-bold text-[#34A853] dark:text-white">
      <span>{text}</span>
      <Cursor cursorStyle="|" />
    </div>
  );
};

export default Florafy;
