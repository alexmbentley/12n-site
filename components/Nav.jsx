import React from 'react';
import Image from 'next/image';
import logo from '@/public/images/12n-logo.png';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { slide as Menu } from 'react-burger-menu';

const Nav = () => {
  const router = useRouter();
  return (
    <div className="nav">
      <Link href="/">
        <Image src={logo} className="nav__logo" alt="Logo" />
      </Link>
      <div>
        <ul className="nav__list">
          <Link href="/">
            <li
              className={
                router.pathname === '/' || ''
                  ? 'nav__list--item-active'
                  : 'nav__list--item'
              }
            >
              Home
            </li>
          </Link>
          <Link href="/features">
            <li
              className={
                router.pathname === '/features'
                  ? 'nav__list--item-active'
                  : 'nav__list--item'
              }
            >
              Features
            </li>
          </Link>
          <Link href="/faqs">
            <li
              className={
                router.pathname === '/faqs'
                  ? 'nav__list--item-active'
                  : 'nav__list--item'
              }
            >
              FAQs
            </li>
          </Link>
          <Link href="/why">
            <li
              className={
                router.pathname === '/why'
                  ? 'nav__list--item-active'
                  : 'nav__list--item'
              }
            >
              Why join?
            </li>
          </Link>
          <Link href="/testimonials">
            <li
              className={
                router.pathname === '/testimonials'
                  ? 'nav__list--item-active'
                  : 'nav__list--item'
              }
            >
              Testimonials
            </li>
          </Link>
          <Link href="https://whop.com/1st2nft/">
            <li
              className={
                router.pathname === '/login'
                  ? 'nav__list--item-active'
                  : 'nav__list--item'
              }
            >
              Member Login
            </li>
          </Link>
        </ul>
        <div className="navigation">
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
          />

          <label for="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
          </label>

          <div className="navigation__background">&nbsp;</div>

          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <a href="/" className="navigation__link">
                  <span></span> Home
                </a>
              </li>
              <li className="navigation__item">
                <a href="/features" className="navigation__link">
                  Features
                </a>
              </li>
              <li className="navigation__item">
                <a href="/faqs" className="navigation__link">
                  FAQs
                </a>
              </li>
              <li className="navigation__item">
                <a href="/why" className="navigation__link">
                  Why join?
                </a>
              </li>
              <li className="navigation__item">
                <a href="/testimonials" className="navigation__link">
                  Testimonials
                </a>
              </li>
              <li className="navigation__item">
                <a
                  href="https://whop.com/1st2nft/"
                  className="navigation__link"
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
