import Transition from './myTransition';
import Trail from './myTrail';
import styles from '../styles/animation.module.css';
import Image from 'next/image';

import { useState, useEffect, useRef } from 'react';

export default function Animation({ children }) {
  const [show, setShow] = useState(false);

  // On componentDidMount set the timer
  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false);
    }, 1800);

    return () => {
      clearTimeout(timeId);
      setShow(true);
    };
  }, [children]);

  const gifSources = [
    '/images/pacman.gif',
    '/images/mario.gif',
    '/images/kirby.gif',
    '/images/bmo.gif',
  ];

  // If show is false the component will return null and stop here
  if (!show) {
    return <div>{children}</div>;
  } else {
    return (
      <div className={styles.transition}>
        <Transition>
          <img
            src={gifSources[Math.floor(Math.random() * gifSources.length)]}
            alt="animated pacman"
            className={styles.gif}
          />
        </Transition>
      </div>
    );
  }
}
