import { useSpring, useTransition, animated, config } from 'react-spring';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function springTest(props) {
  const [flip, set] = useState(false);
  const springProps = useSpring({
    from: {
      color: '#03b1fc',
      scale: 1,
    },
    to: {
      color: '#28d79f',
      scale: 1.2,
    },
    delay: 200,
    config: config.wobbly,
    loop: { reverse: true },
  });

  return <animated.h1 style={springProps}>{props.text}</animated.h1>;
}

springTest.propTypes = {
  text: PropTypes.string,
};
