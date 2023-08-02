import { useState, useEffect } from "react";

const useCountdownTimer = (time: number = 2) => {
  const [countdown, setCountdown] = useState<number>(time*60);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the new countdown value and round to two decimal places
      const newCountdown = Math.max(0, countdown - 1.00);
      setCountdown(newCountdown);
    }, 1000); // 1000ms = 1 second
    if (countdown <= 0) {
      clearInterval(interval);
    }
    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [countdown]);

  return Math.floor(countdown) > 0 ? Number(countdown.toFixed(2)) : 0; // Convert the string back to a number
};

export default useCountdownTimer;
