import React from 'react'
import './Testimonials.css'
import testimonial1 from '../../images/testimonial-1.png'
import testimonial2 from '../../images/testimonial-2.png'
import testimonial3 from '../../images/testimonial-3.png'

function Testimonials() {
  return (
    <div className='testimonial-container'>
        <div className='testimonial-title-banner'>TESTIMONIALS</div>
        <div className="testimonial-icon-container">
            <div className="testimonial-icon">
                <img 
                    src={testimonial1} 
                    alt="testimonial-icon-1"
                    className='testimonial-pic'
                    />
                <p className='testimonial-text'>"Absolutely blown away by the quality and convenience of this cooking service! From gourmet meals to everyday favorites, they deliver deliciousness right to my doorstep. Couldn't be happier!"</p>
                <h2>John Doe</h2>
            </div>
            <div className="testimonial-icon">
                <img 
                    src={testimonial2} 
                    alt="testimonial-icon-2"
                    className='testimonial-pic'
                    />
                <p className='testimonial-text'>"I've tried several meal delivery services, but this one stands out for its attention to detail and variety. Every dish feels like it's been crafted with care, and the freshness of the ingredients is evident in every bite. My family loves it!"</p>
                <h2>Susan Lee</h2>
            </div>
            <div className="testimonial-icon">
                <img 
                    src={testimonial3} 
                    alt="testimonial-icon-3"
                    className='testimonial-pic'
                    />
                <p className='testimonial-text'>"As a busy professional, I rarely have time to cook, but thanks to this service, I can enjoy restaurant-quality meals at home without any of the hassle. The flavors are exceptional, and the portions are just right. Highly recommend!"</p>
                <h2>Jamal Davis</h2>
            </div>
        </div>
    </div>
  )
}

export default Testimonials