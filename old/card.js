import React, { useState } from 'react';
import { useTransition, config, animated } from 'react-spring';

export default function Card() {
  const [list, setList] = useState(['100100101010001']);

  const listTransitions = useTransition(list, {
    config: config.molases,
    from: { opacity: 0, transform: 'translate3d(-25%, 0px, 0px)' },
    enter: { opacity: 1, transform: 'translate3d(0%, 0px, 0px)' },
    leave: { opacity: 0, height: 0, transform: 'translate3d(25%, 0px, 0px)' },
    keys: list.map((item, index) => index),
    onRest: () => setList([]),
  });

  return (
    <div style={{ padding: '15px' }} className="App">
      {listTransitions((styles, item) => (
        <animated.div style={styles}>{item}</animated.div>
      ))}
    </div>
  );
}
