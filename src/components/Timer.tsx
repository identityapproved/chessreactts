import React, { FC, useEffect, useRef, useState } from 'react';
import { Colors } from '../models/Colors';
import { Player } from '../models/Player';

interface TimerProps {
   currentPlayer: Player | null;
   restart: () => void;
}

const Timer: FC<TimerProps> = ({ currentPlayer, restart }) => {
   const [blackTime, setBlackTime] = useState(300);
   const [whiteTime, setWhiteTime] = useState(300);
   const timer = useRef<null | ReturnType<typeof setInterval>>(null);

   useEffect(() => {
      startTimer();
   }, [currentPlayer]);

   function startTimer() {
      if (timer.current) {
         clearInterval(timer.current);
      }
      const callback = currentPlayer?.colors === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer;
      timer.current = setInterval(callback, 1000);
   }

   function decrementWhiteTimer() {
      setWhiteTime(prev => prev - 1);
   }

   function decrementBlackTimer() {
      setBlackTime(prev => prev - 1);
   }

   function handleRestart() {
      setBlackTime(300);
      setWhiteTime(300);
      restart();
   }

   return (
      <>
         <div><button onClick={handleRestart}>RESTART</button></div>
         <h2>White {whiteTime}</h2>
         <h2>Black {blackTime}</h2>
      </>
   );
};

export default Timer;