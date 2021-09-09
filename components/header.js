import { useSpring, useTransition, animated, config } from 'react-spring';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Header() {
  const [text, setText] = useState('');

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
}
