import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { useSpring, animated, config } from 'react-spring';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Trex from '../components/Trex';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import backgroundImage from '../public/images/tron.jpg';

const name = 'Ryan Whittingham';
export const siteTitle = 'Ryan Whittingham';

export default function Layout({ children, home }) {
  return (
    <Parallax pages={1.5}>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="author" content="Ryan Whittingham"></meta>
          <meta
            name="description"
            content="Web developer Ryan Whittingham's portfolio."
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

        <ParallaxLayer offset={0} height={100} speed={10}>
          <div className={styles.bgWrap}>
            <Image
              priority
              alt="Mountains"
              src={backgroundImage}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.83}
          factor={0.03}
          speed={8}
          style={{ backgroundColor: '#42c22f' }}
        />
        <ParallaxLayer
          offset={0.9999}
          factor={0.5}
          speed={5}
          style={{ backgroundColor: '#e3e327' }}
        />

        <ParallaxLayer
          offset={0}
          speed={2.75}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <header className={styles.header}>
            <animated.div
              style={useSpring({
                from: { opacity: 0, x: -700 },
                to: { opacity: 1, x: 0 },
                delay: 500,
              })}
            >
              <h1 className={styles.heading2Xl}>{name.toUpperCase()}</h1>
            </animated.div>
            <animated.div
              style={useSpring({
                from: { opacity: 0, x: 700 },
                to: { opacity: 1, x: 0 },
                delay: 1500,
              })}
            >
              <h1 className={styles.heading2Xl}>FULLSTACK WEB DEVELOPER</h1>
            </animated.div>
          </header>
        </ParallaxLayer>
        <ParallaxLayer offset={1.5} speed={4}>
          <animated.div
            style={useSpring({
              from: { opacity: 0, y: 100 },
              to: { opacity: 1, y: 0 },
            })}
          >
            <Image
              priority
              src="/images/profile.jpg"
              width="200"
              height="200"
            />
          </animated.div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.95} speed={4}>
          <div className={styles.container}>
            <main>{children}</main>

            {!home && (
              <div className={styles.backToHome}>
                <Link href="/">
                  <a>← Back to home</a>
                </Link>
              </div>
            )}

            <div>
              <Link href="/reactThreeFiber">
                <a>Trex</a>
              </Link>
            </div>
          </div>
        </ParallaxLayer>
      </div>
    </Parallax>
  );
}
