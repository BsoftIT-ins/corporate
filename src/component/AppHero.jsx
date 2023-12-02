import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col, Button } from 'react-bootstrap';


var heroData =[
    {
        id:1,
        image: require ('../assets/images/img-hero1.jpg'),
        title:'The Perfect Design for your Website',
        description:'The quick brown fox jumps over the lazy dog as soon as possible. The quick brown fox jumps over the lazy dog as soon as possible. The quick brown fox jumps over the lazy dog as soon as possible.',
        link:'https://www.google.com',
    },
    {
        id:2,
        image: require ('../assets/images/img-hero2.jpg'),
        title:'Start your future financial plan',
        description:'The quick brown fox jumps over the lazy dog as soon as possible. The quick brown fox jumps over the lazy dog as soon as possible. The quick brown fox jumps over the lazy dog as soon as possible.',
        link:'https://www.facebook.com',
    },
    {
        id:3,
        image: require ('../assets/images/img-hero3.jpg'),
        title:'Enjoy the difference',
        description:'The quick brown fox jumps over the lazy dog as soon as possible. The quick brown fox jumps over the lazy dog as soon as possible. The quick brown fox jumps over the lazy dog as soon as possible.',
        link:'https://www.twitter.com',
    },
]

const AppHero = () => {
  return (
    <section id='home' className='hero-block'>
      <Carousel>
        {heroData.map(hero => (
          <Carousel.Item key={hero.id}>
            <img className='d-block w-100' src={hero.image} alt={"Slide" + hero.id} />
            <Carousel.Caption className='text-center'>
              <Container fluid>
                <Row>
                  <Col sm={12} md={8} className='mx-auto'>
                    <h3>{hero.title}</h3>
                    <p>{hero.description}</p>
                    <a className='btn btn-primary' href={hero.link}>Learn More</a>
                  </Col>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  )
}

export default AppHero;