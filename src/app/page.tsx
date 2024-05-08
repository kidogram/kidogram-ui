'use client';
import React from 'react';
import Button from './components/button';
import Header from './components/header';

const App: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <Header />
      <Button onClick={handleClick} variant="primary">
        Primary Button
      </Button>
      <Button onClick={handleClick} variant="secondary">
        Secondary Button
      </Button>
    </div>
  );
};

export default App;
