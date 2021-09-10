import Head from 'next/head';
import styles from '../styles/index.module.css';
import Typewriter from '../components/typewriter';
import Image from 'next/image';
import Link from 'next/link';

import backgroundImage from '../public/images/terminalTwo.jpg';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import profileImage from '../public/images/snake.png';
import { useSpring, animated, config } from 'react-spring';

import twitterLogo from '../public/images/twitter.png';
import linkedin from '../public/images/linkedin.png';
import github from '../public/images/github.png';

const name = 'Ryan Whittingham';
export const siteTitle = 'Ryan Whittingham';

export default function Home() {
  return (
    <div className={styles.wrapper}>
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

      <header className={styles.headerContainer}>
        <Image
          priority
          src={backgroundImage}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className={styles.background}
        />
        <div className={styles.heading}>
          <Typewriter text={name} />
        </div>
        <div className={styles.profileImageContainer}>
          <animated.div
            style={useSpring({
              config: { duration: 200 },
              from: { opacity: 0 },
              to: { opacity: 1 },
              delay: 3200,
            })}
          >
            <div className={styles.profileImage}>
              <Image
                priority
                src={profileImage}
                layout="fill"
                objectFit="contain"
                objectPosition="top"
              />
            </div>
          </animated.div>
        </div>
        <div className={styles.statsContainer}>
          <div className={styles.stats}>
            <animated.div
              style={useSpring({
                config: { duration: 1 },
                from: { opacity: 0 },
                to: { opacity: 1 },
                delay: 4000,
              })}
            >
              <p>Specialty: Front End Development</p>
            </animated.div>
            <animated.div
              style={useSpring({
                config: { duration: 1 },
                from: { opacity: 0 },
                to: { opacity: 1 },
                delay: 5000,
              })}
            >
              <p>Location: Battle Ground, WA</p>
            </animated.div>
            <animated.div
              style={useSpring({
                config: { duration: 1 },
                from: { opacity: 0 },
                to: { opacity: 1 },
                delay: 6000,
              })}
            >
              <p>Training: Clark College</p>
            </animated.div>
            <animated.div
              style={useSpring({
                config: { duration: 1000 },
                from: { opacity: 0 },
                to: { opacity: 1 },
                delay: 7200,
              })}
              className={styles.caret}
            >
              <animated.div
                style={useSpring({
                  config: { duration: 1000 },
                  from: { y: 0 },
                  to: { y: -20 },
                  loop: { reverse: true },
                })}
                className={styles.caret}
              >
                &#9660;
              </animated.div>
            </animated.div>
          </div>
        </div>
      </header>

      <article className={styles.main}>
        <h2>Why I Code</h2>
        <p>
          Software development is the perfect medium for my creative & curious
          nature. I love to build and I love to learn. Through programming, I’ve
          discovered a world of endless potential that continually shapes the
          way I think and approach life. I find happiness in designing efficient
          data structures, and gratification in pragmatically solving complex
          problems. Oh and the best part, the only tools necessary are a
          computer, the internet, and a determined mind.
        </p>
      </article>

      <div className={styles.container}>
        <div className={styles.asideContainer}>
          <aside className={styles.aside}>
            <h3>Tech That I Use</h3>
            <ul>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>GitHub</li>
              <li>React</li>
              <li>Next.js</li>
            </ul>
          </aside>
        </div>
        <div className={styles.asideContainer}>
          <aside className={styles.aside}>
            <h3>My Approach</h3>
            <ul>
              <li>Object Oriented Programming</li>
              <li>Test Driven Development</li>
              <li>Functional Programming</li>
              <li>Agile Methodology</li>
              <li>Responsive Design</li>
            </ul>
          </aside>
        </div>
      </div>

      <section className={styles.container}>
        <h2>What I've Built</h2>
        <div className={styles.project}>
          <p>Coming soon...</p>
        </div>
      </section>

      <section className={styles.container}>
        <h2>Reach Out</h2>
        <div className={styles.project}>
          <Link href="https://twitter.com/ry_whittingham">
            <a>
              <Image
                src={twitterLogo}
                height="400"
                layout="responsive"
                objectFit="contain"
                objectPosition="center"
              />
              <p>@ry_whittingham</p>
            </a>
          </Link>
        </div>
        <div className={styles.project}>
          <Link href="https://www.linkedin.com/in/ryan-whittingham-wa/">
            <a>
              <Image
                src={linkedin}
                height="520"
                layout="responsive"
                objectFit="contain"
                objectPosition="center"
              />
              <p>Linkedin</p>
            </a>
          </Link>
        </div>
        <div className={styles.project}>
          <Link href="https://github.com/ryan-whittingham-v1">
            <a>
              <Image
                src={github}
                height="118"
                layout="responsive"
                objectFit="contain"
                objectPosition="center"
              />
              <p>GitHub</p>
            </a>
          </Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Copyright © 2021 Ryan Whittingham. All Rights Reserved</p>
      </footer>
    </div>
  );
}
