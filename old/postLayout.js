import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { useSpring, animated, config } from 'react-spring';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Animation from '../components/animation';

const name = 'Ryan Whittingham';
export const siteTitle = 'Ryan Whittingham';

export default function PostLayout({ children, home }) {
  return (
    <Parallax pages={1.4}>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <ParallaxLayer
          offset={0.75}
          factor={0.03}
          speed={2}
          style={{ backgroundColor: '#fc0345' }}
        />
        <ParallaxLayer
          offset={0.78}
          factor={0.03}
          speed={1.6}
          style={{ backgroundColor: '#32dbb4' }}
        />
        <ParallaxLayer
          offset={0.8}
          factor={0.04}
          speed={1.3}
          style={{ backgroundColor: '#e3e327' }}
        />

        <ParallaxLayer offset={0} speed={2.5}>
          <div className={styles.container}>
            <main>{children}</main>

            {!home && (
              <div className={styles.backToHome}>
                <Link href="/">
                  <a>← Back to home</a>
                </Link>
              </div>
            )}
          </div>
        </ParallaxLayer>
      </div>
    </Parallax>
  );
}
