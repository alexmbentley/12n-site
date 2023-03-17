import React from 'react';
import styles from '@/styles/Nav.module.scss';
import Image from 'next/image';
import logo from '@/public/images/12n-logo.png';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { slide as Menu } from 'react-burger-menu';

const Nav = () => {
  const router = useRouter();
  return (
    <div className={styles.nav}>
      <Link href="/">
        <Image src={logo} className={styles['nav__logo']} alt="Logo" />
      </Link>
      <div>
        <ul className={styles['nav__list']}>
          <Link href="/">
            <li
              className={
                router.pathname === '/' || ''
                  ? styles['nav__list--item-active']
                  : styles['nav__list--item']
              }
            >
              Home
            </li>
          </Link>
          <Link href="/features">
            <li
              className={
                router.pathname === '/features'
                  ? styles['nav__list--item-active']
                  : styles['nav__list--item']
              }
            >
              Features
            </li>
          </Link>
          <Link href="/faqs">
            <li
              className={
                router.pathname === '/faqs'
                  ? styles['nav__list--item-active']
                  : styles['nav__list--item']
              }
            >
              FAQs
            </li>
          </Link>
          <Link href="/why">
            <li
              className={
                router.pathname === '/why'
                  ? styles['nav__list--item-active']
                  : styles['nav__list--item']
              }
            >
              Why join?
            </li>
          </Link>
          <Link href="/testimonials">
            <li
              className={
                router.pathname === '/testimonials'
                  ? styles['nav__list--item-active']
                  : styles['nav__list--item']
              }
            >
              Testimonials
            </li>
          </Link>
          <Link href="https://whop.com/1st2nft/">
            <li
              className={
                router.pathname === '/login'
                  ? styles['nav__list--item-active']
                  : styles['nav__list--item']
              }
            >
              Member Login
            </li>
          </Link>
        </ul>
        <div className={styles['navigation']}>
          <input
            type="checkbox"
            className={styles['navigation__checkbox']}
            id="navi-toggle"
          />

          <label for="navi-toggle" className={styles['navigation__button']}>
            <span className={styles['navigation__icon']}>&nbsp;</span>
          </label>

          <div className={styles['navigation__background']}>&nbsp;</div>

          <nav className={styles['navigation__nav']}>
            <ul className={styles['navigation__list']}>
              <li className={styles['navigation__item']}>
                <a href="/" className={styles['navigation__link']}>
                  <span></span> Home
                </a>
              </li>
              <li className={styles['navigation__item']}>
                <a href="/features" className={styles['navigation__link']}>
                  Features
                </a>
              </li>
              <li className={styles['navigation__item']}>
                <a href="/faqs" className={styles['navigation__link']}>
                  FAQs
                </a>
              </li>
              <li className={styles['navigation__item']}>
                <a href="/why" className={styles['navigation__link']}>
                  Why join?
                </a>
              </li>
              <li className={styles['navigation__item']}>
                <a href="/testimonials" className={styles['navigation__link']}>
                  Testimonials
                </a>
              </li>
              <li className={styles['navigation__item']}>
                <a
                  href="https://whop.com/1st2nft/"
                  className={styles['navigation__link']}
                >
                  Member Login
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
