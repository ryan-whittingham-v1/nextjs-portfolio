import React from 'react';
import { useTrail, animated, config } from '@react-spring/web';

import styles from '../styles/myTrail.module.css';

export default function MyTrail(props) {
  const items = React.Children.toArray(props.children);
  const trail = useTrail(items.length, {
    config: config.molasses,
    x: 0,
    from: { x: -70 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <animated.div key={index} className={styles.trailsText} style={style}>
          <animated.div>{items[index]}</animated.div>
        </animated.div>
      ))}
    </div>
  );
}
