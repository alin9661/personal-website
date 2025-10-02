'use client';

import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  texts: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delay?: number;
}

export default function TypingAnimation({
  texts,
  typeSpeed = 100,
  deleteSpeed = 50,
  delay = 2000,
}: TypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = texts[currentTextIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(text.substring(0, currentText.length + 1));
        if (currentText === text) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        setCurrentText(text.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, typeSpeed, deleteSpeed, delay]);

  return (
    <span className="text-2xl md:text-4xl font-light text-gray-600">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}