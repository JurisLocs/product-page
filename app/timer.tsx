'use client';
import React, { useState, useEffect } from 'react';

const Timer = () => {
    const totalSeconds = 2 * 24 * 60 * 60;
    const [countdown, setCountdown] = useState(totalSeconds);

    useEffect(() => {
        const timer = setInterval(() => {
          setCountdown((prevCountdown) => {
            if (prevCountdown === 0) {
              return 0;
            } else {
              return prevCountdown - 1;
            }
          });
        }, 1000);
    
        return () => {
          clearInterval(timer);
        };
      }, []);

      const formatTime = (time:any) => {
        const days = Math.floor(time / (24 * 60 * 60));
        const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((time % (60 * 60)) / 60);
        const seconds = time % 60;
        return `${days}d:${hours}h:${minutes}m:${seconds}s`;
  };

  return <div>{formatTime(countdown)}</div>;
};

export default Timer;
