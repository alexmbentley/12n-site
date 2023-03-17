import React from 'react';
import styles from '@/styles/Home.module.scss';
import Link from 'next/link';
import { BsChevronDoubleDown } from 'react-icons/bs';

const Main = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['container__welcome']}>
        <h1 className={styles['container__welcome--h1']}>
          Welcome to <br />
        </h1>
        <h1 className={styles['container__welcome--h1hl']}> 1st2Notify</h1>
        <p>
          Our community is dedicated to helping you achieve financial freedom
          through successful side hustles. With exclusive content, live
          workshops, personalised coaching, and a private forum, you'll have
          everything you need to start and grow your side hustle. Connect with
          like-minded individuals and gain access to invaluable resources to
          take your hustle to the next level. Join us today and start your
          journey towards financial freedom!
        </p>
        <Link href="#video" scroll={false}>
          <p className={styles['container__welcome--more']}>Find out more</p>
        </Link>
      </div>

      <div id="video" className={styles['container__video']}>
        <iframe
          className={styles['container__video--player']}
          width="100%"
          height="100%"
          src="https://drive.google.com/file/d/1maIwc7kjwTX0Xyft7ymRdFOJWvAnhGan/preview"
          title="1st2Notify Promo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className={styles['container__video--more']}>
          <h2 className={styles['container__video--heading']}>
            Activate your free trial now!
          </h2>
          <a
            href="https://whop.com/checkout/plan_p9joThX6UZC3c?d2c=true"
            className={styles['container__video--button']}
          >
            Join now
          </a>
        </div>
      </div>

      <div className={styles['container__reviews']}>
        <h3 className={styles['container__reviews--heading']}>
          Here's what our members have to say
        </h3>
        <div className="commonninja_component pid-2302da83-b560-4909-843d-18d30b712063"></div>
      </div>
    </div>
  );
};

export default Main;
