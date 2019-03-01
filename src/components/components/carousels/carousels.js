import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

// import Carousel from './carousel';
import './carousels.scss';
import img1 from '../../../images/3.png';
import img2 from '../../../images/2.png';
import img3 from '../../../images/4.png';
import img4 from '../../../images/5.png';
import img5 from '../../../images/6.png';


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

      <div className='' id='alerts'>
        <section className='mx-3 mt-1 mb-4'>
          <h3>Carousel</h3>
          <p>Use this elements, if you want to show some hints or additional information</p>

          <div className='row'>
            <div className='col-md-4 mb-4'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Default carousel</p>
                <Carousel showThumbs={false}>
                  {slides.map((slide, index) => (
                    <div key={index}>
                      <img src={slide.src} alt={slide.alt} />
                      <p className="legend">{slide.caption}</p>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
            <div className='col-md-4 mb-4'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>With Transition Time</p>
                <Carousel transitionTime={1000} showThumbs={false}>
                  {slides.map((slide, index) => (
                    <div key={index}>
                      <img src={slide.src} alt={slide.alt} />
                      <p className="legend">{slide.caption}</p>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
            <div className='col-md-4 mb-4'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Autoplay with no array</p>
                <Carousel autoPlay interval={1500} infiniteLoop showThumbs={false} showArrows={false} >
                  {slides.map((slide, index) => (
                    <div key={index}>
                      <img src={slide.src} alt={slide.alt} />
                      <p className="legend">{slide.caption}</p>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>


          <div className='row'>
            <div className='col-md-5 offset-md-1 mb-4'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Center mode, with Thumbs and no Indicators</p>
                <Carousel centerMode showIndicators={false}>
                  {slides.map((slide, index) => (
                    <div key={index}>
                      <img src={slide.src} alt={slide.alt} />
                      <p className="legend">{slide.caption}</p>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
            <div className='col-md-5  mb-4'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Center Slide %, with Thumbs and EmulateTouch</p>
                <Carousel centerMode centerSlidePercentage={50} emulateTouch showThumbs={true}>
                  {slides.map((slide, index) => (
                    <div key={index}>
                      <img src={slide.src} alt={slide.alt} />
                      <p className="legend">{slide.caption}</p>
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
