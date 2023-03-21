import React from 'react';
import Slider from 'react-slick';
import styles from '@/styles/Testimonials.module.scss';

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className={styles['carousel']}>
        <h3 className={styles['carousel__heading']}>Jordan Keen</h3>
        <p className={styles['carousel__text']}>
          From being in this group around a year now I can honestly say this is
          not a community this is a family. Each one of us bounce off eachother
          and genuinely want eachother to succeed. With everything there are
          hiccups but the staff in here are amazing and will drop everything to
          help you. I can't emphasise how much good this group has done me in
          terms of growth, mentality and success. Love you fellas and thanks for
          gods work you do!
        </p>
      </div>
      <div className={styles['carousel']}>
        <h3 className={styles['carousel__heading']}>ChIlevodoo</h3>
        <p className={styles['carousel__text']}>
          One of the greatest groups in the Crypto/NFT space. The staff are
          polite, responsive and always willing to help if you need it. It's up
          to date on everything crypto/nfts and recently have a Forex component
          added which allows users to passively make income without doing
          anything! Nothing but great things to say about 1st2notify and the
          team.
        </p>
      </div>
      <div className={styles['carousel']}>
        <h3 className={styles['carousel__heading']}>Oliver K</h3>
        <p className={styles['carousel__text']}>
          Been in 1st2Notify for a very long time. I've enjoyed every single
          moment people are so nice in there. They have helped me through
          everything the last 2 years. There is so many different ways of making
          money in their server. Overall its just a very nice place and a lot of
          money is being made in there.
        </p>
      </div>
    </Slider>
  );
};

export default TestimonialsCarousel;
