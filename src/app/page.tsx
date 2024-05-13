'use client';
import React from 'react';
import Button from './components/button';
import Header from './components/header';
import Image from 'next/image';
import section1Image1 from '../../public/dashboard/section1-left.svg';
import section1Image2 from '../../public/dashboard/section1-right.svg';
import getStarted from '../../public/icons/get-started.svg';
import letsTalk from '../../public/icons/lets-talk.svg';
import tick from '../../public/icons/tick.svg';

const App: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <Header />
      <div>
        <div className="flex justify-between items-center ">
          <Image src={section1Image1} alt="section1" />
          <div className="flex flex-col gap-16 ">
            <div className="flex flex-col gap-8 ">
              {' '}
              <p className='flex  justify-center'>
                We’re making kids’ fashion highly personalized & hassle-free.
              </p>
              <div className="flex flex-col gap-4  ">
                <p className='flex  justify-center'>
                  Be it any special occasion, a school trip or just a casual
                  evening hangout with friends — your kid deserves to look good
                  and feel confident with themselves.
                </p>
                <p className='flex  justify-center'>
                  {' '}
                  Our industry expert stylists help curate what works and looks
                  best for them.
                </p>
              </div>
            </div>
            <div className="flex gap-4 justify-center">
              <Button onClick={handleClick} variant="primary">
                <div className="flex gap-1">
                  <Image src={getStarted} alt="Get started" />

                  <p>Get started</p>
                </div>
              </Button>
              <Button onClick={handleClick} variant="secondary">
                <div className="flex gap-1">
                  <Image src={letsTalk} alt="Talk with us" />

                  <p>Talk with us</p>
                </div>
              </Button>
            </div>
            <div className="flex justify-center gap-2">
              <div className="flex gap-1">
                <Image src={tick} alt="Comfort of home" />

                <p>Comfort of home</p>
              </div>

              <div className="flex gap-1">
                <Image src={tick} alt="Certified expert stylists" />

                <p>Certified expert stylists</p>
              </div>

              <div className="flex gap-1">
                <Image src={tick} alt="End-to-end ownership" />

                <p>End-to-end ownership</p>
              </div>
            </div>
          </div>
          <Image src={section1Image2} alt="section2" />
        </div>
      </div>
    </div>
  );
};

export default App;
