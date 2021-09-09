import React, { useState, useEffect } from 'react';
import { useTransition, config, animated } from 'react-spring';

export default function MyTransition(props) {
  const [list, setList] = useState(React.Children.toArray(props.children));

  const listTransitions = useTransition(list, {
    from: { opacity: 0, transform: 'translate3d(-20%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(10%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    config: config.slow,
    keys: list.map((item, index) => index),
    onRest: () => setList([]),
  });

  return (
    <div>
      {listTransitions((styles, item) => (
        <animated.div style={styles}>{item}</animated.div>
      ))}
    </div>
  );
}
