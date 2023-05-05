import { Component } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Image } from "react-bootstrap";
import React from "react";



class About extends Component {
    componentDidMount() {
        document.body.style.backgroundColor = "black"
    }
    render() {
       
        const cardStyle = {
            display: "flex",
            marginBottom: "20px",
            marginLeft: "5px",
            marginRight: "5px",
            width: "18rem",
            backgroundColor: "black",
        };
        const aboutContainer = {
            minHeight: '100vh',
            padding: '10px',
            backgroundColor: "black",
            maxWidth: "1500px",
            margin: "0 auto",
            marginTop: "50px",
            color: "black",
            marginColor: "black",
        };
        
        const cardTitle = {
                fontSize: "25px",
                fontFamily: "'Alex Brush', 'Cormorant Garamond', cursive",
                color: "white",
              };
              
        const cardText = {
            marginTop: "-120px",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "20px",
            color: "white",
        };
        const ourTeam = {
            margin: "0 auto",
            textAlign: "center",
            backgroundColor: "black",
            color: "white",
            marginTop: "80px",
            fontFamily: "'Alex Brush', 'Cormorant Garamond', Lobster",
            fontSize: "60px",
        };

        return (
            <>
            {/* <body style={bodyStyle}></body> */}
            <div style={ourTeam}>
            <p>Our Team</p>
            </div>
            <div style={aboutContainer}>
                <CardGroup>
                    <Card style={cardStyle}>
                        <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/121666413?v=4" />
                        <Card.Body style={{ textAlign: "center", paddingTop: "40px", paddingBottom: "0", marginTop: "10px", marginBottom: "0"}}>
                            <Card.Title style={cardTitle}>Jeanette Leyva</Card.Title>
                            <Card.Text style={cardText}>
                                I am a student currently studying software development and my focus is on JavaScript.
                            I am passionate about building web applications and interactive experiences that are both intuitive and visually appealing.
                            My passions are: Art, Video games, and software development.
                            </Card.Text>
                            <a href="https://www.linkedin.com/in/kylewhiteseattle/">
                                <Image src="/images/Linkedin.png" fluid style={{ height: '30px' }} />
                            </a>
                            <a href="https://github.com/JCLEYVA">
                                <Image src="/images/github.png" fluid style={{ height: '30px', marginLeft: '10px' }}></Image>
                            </a>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card style={cardStyle}>
                        <Card.Img variant="top" src="https://media.licdn.com/dms/image/D4E03AQG6Zf9eiYM9kQ/profile-displayphoto-shrink_200_200/0/1677264412510?e=1688601600&v=beta&t=ofp7eJZb0tSvzOMKjFXcoSgj8wJcenlmYVmzhY8AMwM" />
                        <Card.Body style={{ textAlign: "center", paddingTop: "40px", paddingBottom: "0", marginTop: "10px", marginBottom: "-10px"}}>
                        <Card.Title style={cardTitle}> Joshua Coffey</Card.Title>
                            <Card.Text style={cardText}>
                                I am a highly motivated developer who loves creating user friendly websites that make the users experience enjoyable.{' '}
                            </Card.Text>
                            <a href="https://www.linkedin.com/in/joshuacoffey23/">
                                <Image src="/images/Linkedin.png" fluid style={{ height: '30px' }}></Image>
                            </a>
                            <a href="https://github.com/Coff23">
                                <Image src="/images/github.png" fluid style={{ height: '30px', marginLeft: '10px' }}></Image>
                                
                            </a>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card style={cardStyle}>
                        <Card.Img variant="top" src="https://media.licdn.com/dms/image/C5603AQEGAyIexLQbRg/profile-displayphoto-shrink_200_200/0/1593557630244?e=1688601600&v=beta&t=SfLJXLxwNe88LVzDsCVmKdSIAcR2oRr6Q5YLO-DvIWg" />
                        <Card.Body style={{ textAlign: "center", paddingTop: "40px", paddingBottom: "0", marginTop: "10px", marginBottom: "-10px"}}>
                        <Card.Title style={cardTitle}> Kyle White</Card.Title>
                            <Card.Text style={cardText}>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This card has even longer content than the
                                first to show that equal height action.
                            </Card.Text>
                            <a href="https://www.linkedin.com/in/kylewhiteseattle/">
                                <Image src="/images/Linkedin.png" fluid style={{ height: '30px' }} />
                            </a>
                            <a href="https://github.com/K1ng-T0ast">
                                <Image src="/images/github.png" fluid style={{ height: '30px', marginLeft: '10px' }}></Image>
                            </a>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card style={cardStyle}>
                        <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/43771360?v=4" />
                        <Card.Body style={{ textAlign: "center", paddingTop: "40px", paddingBottom: "0", marginTop: "10px", marginBottom: "-10px"}}>
                        <Card.Title style={cardTitle}>Juan Olmeda</Card.Title>
                            <Card.Text style={cardText}>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This card has even longer content than the
                                first to show that equal height action.
                            </Card.Text>
                            <a href="https://www.linkedin.com/in/juan-olmedo-5613784a/">
                                <Image src="/images/Linkedin.png" fluid style={{ height: '30px' }} />
                            </a>
                            <a href="https://github.com/carlitos-1988">
                                <Image src="/images/github.png" fluid style={{ height: '30px', marginLeft: '10px' }}></Image>
                            </a>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
                </div>
            </>
        )
    }
};

export default About;