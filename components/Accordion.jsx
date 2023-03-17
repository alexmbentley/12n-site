import React, { useEffect, useRef, useState } from 'react';
import styles from '@/styles/Accordion.module.scss';
import { BsChevronDoubleDown } from 'react-icons/bs';

const Accordion = ({ title, info, icon }) => {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState('0px');
  const refHeight = useRef(null);

  useEffect(() => {
    setHeightEl(toggle ? `${refHeight.current.scrollHeight}px` : '0px');
  }, [toggle]);

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <div className={styles.accordion}>
      <button onClick={toggleState} className={styles['accordion__button']}>
        <p className={styles['accordion__button--text']}>{title}</p>
        <p className={styles['accordion__button--logo']}>
          <BsChevronDoubleDown />
        </p>
      </button>

      <div
        className={`${styles['accordion__toggle']} ${
          toggle && styles['animated']
        }`}
        style={{ maxHeight: heightEl }}
        ref={refHeight}
      >
        <p>{info}</p>
      </div>
    </div>
  );
};

export default Accordion;
