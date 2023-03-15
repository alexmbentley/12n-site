import React from 'react';
import styles from '@/styles/Nav.module.scss';
import Image from 'next/image';
import logo from '@/public/images/12n-logo.png';
import Link from 'next/link';

const Nav = () => {
  return (
    <div className={styles.nav}>
      <Image src={logo} className={styles['nav__logo']} alt="Logo" />
      <div>
        <ul className={styles['nav__list']}>
          <Link href="/">
            <li
              className={styles['nav__list--item']}
              onClick={() => setNav(false)}
            >
              Features
            </li>
          </Link>
          <Link className={styles['nav__list--item']} href="/">
            <li onClick={() => setNav(false)}>FAQs</li>
          </Link>
          <Link className={styles['nav__list--item']} href="/">
            <li onClick={() => setNav(false)}>Skills</li>
          </Link>
          <Link className={styles['nav__list--item']} href="/">
            <li onClick={() => setNav(false)}>Testimonials</li>
          </Link>
          <Link className={styles['nav__list--item']} href="/">
            <li onClick={() => setNav(false)}>Member Login</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
