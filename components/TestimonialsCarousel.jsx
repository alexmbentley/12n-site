import React from 'react';
import Slider from 'react-slick';

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
      <div>
        <h3>Testimonial 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed felis
          at nibh sollicitudin lobortis.
        </p>
      </div>
      <div>
        <h3>Testimonial 2</h3>
        <p>
          Aliquam erat volutpat. Vivamus ac risus sed ipsum tristique accumsan
          vel ac dolor.
        </p>
      </div>
      <div>
        <h3>Testimonial 3</h3>
        <p>
          Integer euismod semper nisi, vel varius mauris viverra a. Suspendisse
          vitae enim a nulla gravida tristique.
        </p>
      </div>
    </Slider>
  );
};

export default TestimonialsCarousel;
