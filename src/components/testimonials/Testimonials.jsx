import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/anurag-kumar-srivastava-80a49628a/',
      name: 'Anurag Kumar Srivastava',
      role: 'Full Stack Developer | MERN Stack (MongoDB, Express.js, React.js, Node.js) | Java & DSA | BCA Final Year Student | Building Scalable Full-Stack Web Applications',
      test: 'As a developer and a problem solver, I think Manish is a great collaborative partner to have. I met Manish in some basic javascript & react projects and since then he has drastically progressed in him understanding of the development process. He always has a professional environment and has good audio and video quality which makes it easier to communicate with him.',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/bikram-kumar-8421b130b/',
      name: 'Bikram Kumar',
      role: 'Aspiring Data Analyst | (Excel, SQL, Power BI & Python)',
      test: 'As a developer and a problem solver, I think Manish is a great collaborative partner to have. I met Manish in some basic javascript & react projects and since then he has drastically progressed in him understanding of the development process. He always has a professional environment and has good audio and video quality which makes it easier to communicate with him.',
    }
  ];
  return (
    <section id="testimonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonials" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials