'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Word {
  text: string;
  className?: string;
}

interface TypewriterEffectProps {
  words: Word[];
  className?: string;
  cursorClassName?: string;
}

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: TypewriterEffectProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex]?.text || '';
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 1500;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText.length < word.length) {
        setDisplayText(word.slice(0, displayText.length + 1));
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(word.slice(0, displayText.length - 1));
      } else if (!isDeleting && displayText.length === word.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <div
      className={cn('md:text-xl font-bold text-center md:text-left', className)}
    >
      <motion.span className={words[currentWordIndex]?.className}>
        {displayText}
      </motion.span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className={cn('inline-block w-[4px] h-5 bg-white', cursorClassName)}
      ></motion.span>
    </div>
  );
};
