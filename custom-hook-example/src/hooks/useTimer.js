import { useEffect, useRef, useState } from "react";

const useTimer = (initialSeconds = 0, isCountdown = false) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (isCountdown && prevSeconds <= 0) {
            clearInterval(intervalRef.current);
            return 0;
          }
          return isCountdown ? prevSeconds - 1 : prevSeconds + 1;
        });
      }, 1000);
    } else if (!isActive && intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive, isCountdown]);

  const start = () => setIsActive(true);
  const stop = () => setIsActive(false);
  const reset = () => {
    setIsActive(false);
    setSeconds(initialSeconds);
  };
  return { seconds, start, stop, reset, isActive };
};

export default useTimer;
