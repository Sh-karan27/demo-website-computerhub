import React from 'react';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { services } from '../constants';




const Services = () => {




  return (
    <div className='  w-full flex flex-col items-center justify-center gap-2 mt-20'>
      <h1 className='text-5xl'>Services We Provide.</h1>
      <VerticalTimeline>
        {services.map((service, index) => (
          <VerticalTimelineElement
            key={index}
            date=''
            iconStyle={{
              background: `url(${service.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '50px', // Adjust the width of the icon
              height: '50px', // Adjust the height of the icon
            }}>
            <div>
              <h1 className='text-xl font-semibold text-blue-600'>
                {service.name}
              
              </h1>
              <p className='text-gray-500'>{service.description}</p>
              <button className='btn'>Get Started</button>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Services;
