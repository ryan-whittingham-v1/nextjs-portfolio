import PropTypes from 'prop-types';
import styles from '../styles/typewriter.module.css';
import { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';

export default function Typewriter(props) {
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);
  const [cursor, setCursor] = useState('|');

  let style = styles.text;

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function updateVisibleText() {
    if (index <= props.text.length) {
      setTypedText(`${typedText + props.text.charAt(index)}`);

      await sleep(150);
      setIndex(index + 1);
    }
    if (index === props.text.length - 2) {
      setCursor('');
    }
  }

  useEffect(() => {
    updateVisibleText();
  }, [index]);

  return (
    <h1 className={style}>
      {typedText}
      {cursor}
    </h1>
  );
}

Typewriter.propTypes = {
  text: PropTypes.string,
};
