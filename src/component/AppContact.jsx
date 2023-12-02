import React from 'react'

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const AppContact = () => {
  return (
    <section id='contact' className='block contact-block'>
        <container fluid>
            <div class="title-holder">
            <h2>Contact us</h2>
            <div className='subtitle'>get connected with us</div>
            </div>
            <Form className='contact-form'>
                <Row >
                    <Col sm={4}>
                    <Form.Control type='text' placeholder="Enter your full name" required />
                    </Col>
                    <Col sm={4}>
                    <Form.Control type='email' placeholder="Enter your email" required  />
                    </Col>
                    <Col sm={4}>
                    <Form.Control type='tel' placeholder="Enter your contact number" required  />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <Form.Control as="textarea" placeholder="Enter your message" />
                    </Col>
                </Row>
                <div className='btn-holder'>
                <Button type='submit'>Submit</Button>
                </div>
        </Form>
        </container>
        <div className='google-map'>
        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.5637117469396!2d90.4346312!3d23.7629327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7f5f4487a77%3A0xae6790259728c131!2sE%20Block%2C%20Main%20Rd%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1701365847568!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <container fluid>
            <div className='contact-info'>
                <ul>
                    <li> <i className='fas fa-envelope'></i>
                    bsoftitinfo@gmai.com
                    </li>
                    <li>
                    <i className='fas fa-phone'></i>
                    880-000-000-0000
                    </li>
                    <li>
                    <i className='fas fa-map-marker-alt'></i>
                    Dhaka, Bangladesh
                    </li>
                </ul>
            </div>
        </container>
    </section>
  )
}

export default AppContact