import React from 'react'
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';


const testimonialsData=[
  {
    id:1,
    name:'Jhon Wills',
    description:'Bismillahir Rahmanir Rahim, Quick brown fox jumpso ver the lazy dog asoon as possible',
    designation:'Manager',
  },
  {
    id:2,
    name:'Christina Angel',
    description:'Bismillahir Rahmanir Rahim, Quick brown fox jumpso ver the lazy dog asoon as possible',
    designation:'Accountant',
  },
  {
    id:3,
    name:'Jhon Doe',
    description:'Bismillahir Rahmanir Rahim, Quick brown fox jumpso ver the lazy dog asoon as possible',
    designation:'Manager',
  },
]
const AppTestimonials = () => {
   
  return (
    <section id='testimonial' className='testimonials-block'>
        <Container fluid>
            <div className='title-holder'>
                <h2>Client Testimonials</h2>
                <div className='subtitle'>What client says about us</div>
            </div>
            <Carousel controls={false}>
              {testimonialsData.map (testimonials => {
                return(
                  <Carousel.Item key={testimonials.id}>
                  <blockquote>
                      <p>{testimonials.description}</p>
                      <cite>
                          <span className='name'>{testimonials.name}</span>
                          <span className='designation'>{testimonials.designation}</span>
                      </cite>
                  </blockquote>
              </Carousel.Item>
                )
              })}
          </Carousel>
        </Container>
    </section>
  )
}

export default AppTestimonials