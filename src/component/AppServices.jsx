import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
    {   
        id:1,
        icon:'fas fa-clone',
        title:'Responsive Design',
        description:'Bismillah hir Rahmanir Rahim, Quick brown fox jumps over the lazy dog as soon as possible.',
    },
    {   
        id:2,
        icon:'fas fa-snowflake',
        title:'Creative Design',
        description:'Bismillah hir Rahmanir Rahim, Quick brown fox jumps over the lazy dog as soon as possible.',
    },
    {   
        id:3,
        icon:'fas fa-plug',
        title:'SEO Optimized',
        description:'Bismillah hir Rahmanir Rahim, Quick brown fox jumps over the lazy dog as soon as possible.',
    },
    {   
        id:4,
        icon:'fas fa-desktop',
        title:'Ratina Ready',
        description:'Bismillah hir Rahmanir Rahim, Quick brown fox jumps over the lazy dog as soon as possible.',
    },
    {   
        id:5,
        icon:'fas fa-trophy',
        title:'Browser Compablity',
        description:'Bismillah hir Rahmanir Rahim, Quick brown fox jumps over the lazy dog as soon as possible.',
    },
    {   
        id:6,
        icon:'fas fa-life-ring',
        title:'Customer Support',
        description:'Bismillah hir Rahmanir Rahim, Quick brown fox jumps over the lazy dog as soon as possible.',
    },
    
]


const AppServices = () => {
  return (
    <section id='services' className='services-block'>
    <Container fluid>
    <div className='title-holder'>
        <h2>Our Services</h2>
        <div className='subtitle'>Services we provide</div>
    </div>
    <Row>
    {
        servicesData.map( services=> {
            return(
                <Col sm={4} className='holder' key={services.id}>
                <div className='icon'>
                    <i className={services.icon}></i>
                </div>
                <h3>{services.title}</h3>
                <p>{services.description}</p>
                </Col>
            )
        })
    }
      
    </Row>
  </Container>
    </section>
  )
}

export default AppServices