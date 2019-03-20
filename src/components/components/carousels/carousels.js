import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

// import Carousel from './carousel';
import './carousels.scss';
import img1 from '../../../images/img1.jfif';
import img2 from '../../../images/img2.jfif';
import img3 from '../../../images/img3.jfif';
import img4 from '../../../images/img4.jfif';
import img5 from '../../../images/img5.jfif';


class Carousels extends Component {
  render() {
    const slides = [
      {
        src: img1,
        alt: 'img1',
        caption: 'Caption 1',
      },
      {
        src: img2,
        alt: 'img2',
        caption: 'Caption 2',
      },
      {
        src: img3,
        alt: 'img3',
        caption: 'Caption 3',
      },
      {
        src: img4,
        alt: 'img4',
        caption: 'Caption 4',
      },
      {
        src: img5,
        alt: 'img5',
        caption: 'Caption 5',
      },
    ];

    return (

      <div className='text-secondary' id='carousels'>
        <section className='mx-3 mt-1 mb-4'>
          <h3>Carousel</h3>
          <p>A slideshow component for cycling through elements—images or slides of text—like a carousel.</p>

          <div className='row'>
            <div className='col-md-6 col-lg-4 mb-4'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4 shadow'>
                <p className='font-weight-bold'>Default Carousel<br/>
                  <small>Simple Carousel with arrow</small>
                </p>
                <Carousel showThumbs={false}>
                  {slides.map((slide, index) => (
                    <div key={index}>
                      <img src={slide.src} alt={slide.alt} />
                      <p className='legend'>{slide.caption}</p>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-4'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4 shadow'>
                <p className='font-weight-bold'>Carousel with Transition Time<br/>
                  <small>Carousel with transition time in slide</small>
                </p>
                <Carousel transitionTime={1000} showThumbs={false}>
                  {slides.map((slide, index) => (
                    <div key={index}>
                      <img src={slide.src} alt={slide.alt} />
                      <p className='legend'>{slide.caption}</p>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
            <div className='col-md-8 offset-md-2 col-lg-4 offset-lg-0 mb-4'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4 shadow'>
                <p className='font-weight-bold'>Autoplay with no Arrow<br/>
                  <small>Autoplay Carousel without arrow and interval 1500sec</small>
                </p>
                <Carousel autoPlay interval={1500} infiniteLoop showThumbs={false} showArrows={false} >
                  {slides.map((slide, index) => (
                    <div key={index}>
                      <img src={slide.src} alt={slide.alt} />
                      <p className='legend'>{slide.caption}</p>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>


          <div className='row'>
            <div className='col-md-6 col-lg-5 offset-lg-1 mb-4'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4 shadow'>
                <p className='font-weight-bold'>Center Mode, with Thumbs and no Indicators<br/>
                  <small>Center Carousel with thumbs and without indicators</small>
                </p>
                <Carousel centerMode showIndicators={false}>
                  {slides.map((slide, index) => (
                    <div key={index}>
                      <img src={slide.src} alt={slide.alt} />
                      <p className='legend'>{slide.caption}</p>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
            <div className='col-md-6 col-lg-5  mb-4'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4 shadow'>
                <p className='font-weight-bold'>Center Slide %, with Thumbs<br/>
                  <small>Percent center Carousel with thumbs and emalated touch</small>
                </p>
                <Carousel centerMode centerSlidePercentage={50} emulateTouch showThumbs={true}>
                  {slides.map((slide, index) => (
                    <div key={index}>
                      <img src={slide.src} alt={slide.alt} />
                      <p className='legend'>{slide.caption}</p>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>

        </section>
      </div>
    );
  }
}

export default Carousels;
