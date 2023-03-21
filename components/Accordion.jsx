import React, { useEffect, useRef, useState } from 'react';
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
    <div className="accordion">
      <button onClick={toggleState} className="accordion__button">
        <p className="accordion__button--text">{title}</p>
        <p className="accordion__button--logo">
          <BsChevronDoubleDown />
        </p>
      </button>

      <div
        className={`$'accordion__toggle' ${toggle && 'animated'}`}
        style={{ maxHeight: heightEl }}
        ref={refHeight}
      >
        <p>{info}</p>
      </div>
    </div>
  );
};

export default Accordion;
