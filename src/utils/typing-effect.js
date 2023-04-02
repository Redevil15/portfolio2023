import { useState, useEffect, useRef } from "react";

export function useTypingEffect(words, interKeyStrokeDurationInMs) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentPositionRef = useRef(0);
  const isDeletingRef = useRef(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      currentPositionRef.current += isDeletingRef.current ? -1 : 1;
      setCurrentPosition(currentPositionRef.current);

      if (currentPositionRef.current === words[currentWordIndex].length) {
        setIsDeleting(true);
        isDeletingRef.current = true;
      } else if (currentPositionRef.current === 0) {
        setIsDeleting(false);
        isDeletingRef.current = false;
        setCurrentWordIndex((index) => (index + 1) % words.length);
      }
    }, interKeyStrokeDurationInMs);

    return () => {
      clearTimeout(timerId);
    };
  }, [interKeyStrokeDurationInMs, words, currentWordIndex]);

  return words[currentWordIndex].substring(0, currentPosition);
}
