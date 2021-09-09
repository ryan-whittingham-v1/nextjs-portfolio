import '../styles/global.css';
import Animation from '../components/animation';
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Animation>
        <Component {...pageProps} />
      </Animation>
    </>
  );
}
