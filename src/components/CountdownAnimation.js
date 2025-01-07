import React, { useContext } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { SettingsContext } from '../context/SettingsContext';

const CountdownAnimation = ({ key, timer, animate, children, onTimerEnd }) => {
  const { stopAimate } = useContext(SettingsContext);

  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      duration={timer * 60} // Convert timer value from minutes to seconds
      colors={[
        ['#FE6F6B', 0.33],
        ['#FE6F6B', 0.33],
        ['#FE6F6B', 0.33],
      ]}
      strokeWidth={6}
      size={220}
      trailColor="#151932"
      onComplete={() => {
        stopAimate();
        if (onTimerEnd) onTimerEnd();
      }}
    >
      {children}
    </CountdownCircleTimer>
  );
};

export default CountdownAnimation;
