import React, { useState, useContext, useEffect } from 'react';
import Button from './components/Button';
import CountdownAnimation from './components/CountdownAnimation';
import SetPomodoro from './components/SetPomodoro';
import { SettingsContext } from './context/SettingsContext';
import BackgroundPicker from './components/BackgroundPicker';
import ToDoList from './components/ToDoList';
import './App.css';

const App = () => {
  const [background, setBackground] = useState(null); // Default to no background
  const [selected, setSelected] = useState(false); // Track if a background has been selected
  const { pomodoro, executing, startAnimate, children, startTimer, pauseTimer, updateExecute, setCurrentTimer, SettingsBtn } = useContext(SettingsContext);

  const handleTimerEnd = () => {
    console.log('Timer ended! Playing sound...');
    const audio = new Audio('/ding.mp3'); // Adjust the path if needed
    audio.play().catch((error) => console.error('Audio play error:', error));
  };

  useEffect(() => {
    updateExecute(executing);
  }, [executing, startAnimate]);

  const handleBackgroundSelection = (bg) => {
    setBackground(bg);
    setSelected(true); // Mark as selected after background selection
  };

  const containerStyles = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // Full height of the viewport
    width: '100vw',     // Full width of the viewport
  };

  // Conditionally add `backgroundImage` or `backgroundColor`
  if (selected && background) {
    containerStyles.backgroundImage = `url(${background})`;
    containerStyles.backgroundColor = 'transparent'; // To ensure the image is visible
  } else {
    containerStyles.backgroundColor = '#1e2140'; // Blue background as fallback
  }

  return (
    <div className="app-container" style={containerStyles}>
      {/* Add To-Do List component in the top right */}
      <ToDoList /> {/* This will render the To-Do list in your app */}

      <div className="container">
        <h1>Pomodoro</h1>
        <h2>Be productive the right way.</h2>

        {/* BackgroundPicker for selecting backgrounds */}
        <BackgroundPicker setBackground={handleBackgroundSelection} />

        {pomodoro !== 0 ? (
          <>
            <ul className="labels">
              <li>
                <Button title="Work" activeClass={executing.active === 'work'} _callback={() => setCurrentTimer('work')} />
              </li>
              <li>
                <Button title="Short Break" activeClass={executing.active === 'short'} _callback={() => setCurrentTimer('short')} />
              </li>
              <li>
                <Button title="Long Break" activeClass={executing.active === 'long'} _callback={() => setCurrentTimer('long')} />
              </li>
            </ul>
            <Button title="Settings" _callback={SettingsBtn} />
            <div className="timer-container">
              <div className="time-wrapper">
                <CountdownAnimation
                  key={pomodoro}
                  timer={pomodoro} // Pass the timer value in minutes
                  animate={startAnimate} // Pass animation state
                  onTimerEnd={handleTimerEnd} // Pass the callback for when the timer ends
                >
                  {children}
                </CountdownAnimation>
              </div>
            </div>
            <div className="button-wrapper">
              <Button title="Start" activeClass={!startAnimate && 'active'} _callback={startTimer} />
              <Button title="Pause" activeClass={startAnimate && 'active'} _callback={pauseTimer} />
            </div>
            
            {/* Spotify Embed */}
          <div className="spotify-container">
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/playlist/5z9CdKSqJjAt30rhTlRDZX?utm_source=generator" width="250" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
            ></iframe>
          </div>
          </>
        ) : (
          <SetPomodoro />
        )}
      </div>
    </div>
  );
};

export default App;
