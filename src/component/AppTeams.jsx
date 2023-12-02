import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const teamsData=[
    {
        id:1,
        image:require("../assets/images/team1.jpg"),
        fbLink:'https://www.facebook.com',
        twitterLink:'https://www.twitter.com',
        linkedinLink:'https://www.linkedin.com',
        name:'Gabriel Hart',
        designation:'CEO',
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quaerat voluptatum",
    },
    {
        id:1,
        image:require("../assets/images/team2.jpg"),
        fbLink:'https://www.facebook.com',
        twitterLink:'https://www.twitter.com',
        linkedinLink:'https://www.linkedin.com',
        name:'Gabriel Hart',
        designation:'CEO',
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quaerat voluptatum",
    },
    {
        id:1,
        image:require("../assets/images/team3.jpg"),
        fbLink:'https://www.facebook.com',
        twitterLink:'https://www.twitter.com',
        linkedinLink:'https://www.linkedin.com',
        name:'Gabriel Hart',
        designation:'CEO',
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quaerat voluptatum",
    },
    {
        id:1,
        image:require("../assets/images/team4.jpg"),
        fbLink:'https://www.facebook.com',
        twitterLink:'https://www.twitter.com',
        linkedinLink:'https://www.linkedin.com',
        name:'David Antony',
        designation:'Manager',
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quaerat voluptatum",
    },
    {
        id:1,
        image:require("../assets/images/team5.jpg"),
        fbLink:'https://www.facebook.com',
        twitterLink:'https://www.twitter.com',
        linkedinLink:'https://www.linkedin.com',
        name:'Jhon Doe',
        designation:'Manager',
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quaerat voluptatum",
    },
    {
        id:1,
        image:require("../assets/images/team6.jpg"),
        fbLink:'https://www.facebook.com',
        twitterLink:'https://www.twitter.com',
        linkedinLink:'https://www.linkedin.com',
        name:'Chiristopher',
        designation:'Deputy Manager',
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quaerat voluptatum",
    },
]
const AppTeams = () => {
  return (
    <section id='team' className='block teams-block'>
        <Container fluid>
        <div className='title-holder'>
            <h2>Our Teams</h2>
            <div className='subtitle'>Some of our experts</div>
        </div>
            <Row>
                {
                    teamsData.map (teams => {
                        return(
                            <Col sm={4} key={teams.id}>
                <div className='image'>
                <Image src={teams.image} alt='image' />
                <div className='overlay'>
                    <div className='socials'>
                      <ul>
                        <li><a href={teams.fbLink}><i className='fab fa-facebook-f'></i></a></li>
                        <li><a href={teams.twitterLink}><i className='fab fa-twitter'></i></a></li>
                        <li><a href={teams.linkedinLink}><i className='fab fa-linkedin-in'></i></a></li>
                      </ul>  
                    </div>
                </div>
                </div>
                <div className='content'>
                <h3>{teams.name}</h3>
                <span className='designation'>{teams.designation}</span>
                <p>{teams.description}</p>
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

export default AppTeams