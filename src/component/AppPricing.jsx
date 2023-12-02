import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

import React from 'react'

const pricingData =[
    {
        id:1,
        plan:'Basic',
        price:'$49.00',
        feature:['Wareframing', 'Visual Design', '5 Pages', 'Free hosting', 'Support & Assistant'],
        link:'https://www.google.com',
    },
   
    {
        id:2,
        plan:'Premium',
        price:'$149.00',
        feature:['Wareframing', 'Visual Design', '15 Pages', 'Free hosting', 'Support & Assistant'],
        link:'https://www.facebook.com',
    },
    {
        id:3,
        plan:'Ultimate',
        price:'$349.00',
        feature:['Wareframing', 'Visual Design', 'Unlimited Pages', 'Free hosting', 'Support & Assistant'],
        link:'https://www.twitter.com',
    },
]

const AppPricing = () => {
  return (
    <section id='pricing' className='block pricing-block'>
        <Container fluid>
        <div className='title-holder'>
            <h2>Pricing &amp; Plans</h2>
            <div className='subtitle'>Check our pricing & Plans</div>
        </div>
        <Row>
        {
            pricingData.map(pricing =>{
                return(
                    <Col sm={4} key={pricing.id}>
                <div className='heading'>
                    <h3>{pricing.plan}</h3>
                    <span className='price'>{pricing.price}</span>
                </div>
                <div className='content'>
                <ListGroup>
                {
                    pricing.feature.map((feature, index) => {
                        return(
                         <ListGroup.Item key={index}>{feature}</ListGroup.Item>   
                        )
                    })
                }
              </ListGroup>
                </div>
                <div className='btn-holder'>
                <a href={pricing.link} className='btn btn-primary'>Order Now</a>
                </div>
            </Col>
                )
            })
        }
            
        </Row>
    </Container>
    </section>
  )
}

export default AppPricing