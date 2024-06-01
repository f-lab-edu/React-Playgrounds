import { useRef, useState } from 'react';

const MINUTES = {
  ONE: 60,
  FIVE: 5 * 60,
  TEN: 10 * 60,
} as const;

export const Stopwatch = () => {
  const [time, setTime] = useState<number>(0);
  const ref = useRef<number>(0);

  const handleReset = () => {
    clearInterval(ref.current);
    ref.current = 0;
    setTime(0);
  };

  const handleStart = () => {
    ref.current = setInterval(() => {
      setTime((time) => (time > 0 ? time - 1 : 0));
    }, 1000);
  };

  const handleOneMinuteTimer = () => {
    clearInterval(ref.current);
    setTime(MINUTES.ONE);
  };

  const handleFiveMinuteTimer = () => {
    clearInterval(ref.current);
    setTime(MINUTES.FIVE);
  };

  const handleTenMinuteTimer = () => {
    clearInterval(ref.current);
    setTime(MINUTES.TEN);
  };

  const format = (n: number) => (n < 10 ? `0${n}` : n);

  const display = `${format(Math.floor(time / 60))} : ${format(Math.floor(time % 60))}`;

  return (
    <div>
      <div>{display}</div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '300px',
          gap: '10px',
        }}
      >
        <button onClick={handleOneMinuteTimer}>1분</button>
        <button onClick={handleFiveMinuteTimer}>5분</button>
        <button onClick={handleTenMinuteTimer}>10분</button>
        <button onClick={handleStart}>START</button>
        <button onClick={handleReset}>RESET</button>
      </div>
    </div>
  );
};
