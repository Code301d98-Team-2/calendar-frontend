import { Component } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Image } from "react-bootstrap";

class About extends Component {
    render() {
        return (
            <>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/121666413?v=4" />
                        <Card.Body>
                            <Card.Title>Jeanette Leyva</Card.Title>
                            <Card.Text>
                                Hi, I'm Jeanette. I recently got out the military to pursue a different career path. 
                                I am student at Code Fellows and soon to be enrolled in UC San Diego to pursue a computer science degree. 
                                I wanted to get into software development for game design and development. I fell in love with video games when I was five.
                                The first few videos games that shaped my childhood were Marvel vs Capcom, Super Mario 64, Banjo Kazooie, Star Wars Ep 1: Racer, Medal of Honor and 
                                Donkey Kong.<br><br> 
                                I think I fell in love with video games because of my competitive nature and my love for problem solving. 
                                I am hoping to use some of those traits to become a good developer. Game developers will usually work with a creative team on 
                                graphic design, theme, characters and level design and layouts. Software developers will then take these ideas and design, develop and test the software
                                making sure it meets the needs of the game's vision. I have an artistic eye so I am hoping that my years of experience in art, and my new training in software development
                                will help reach my goals in becomming a game developer.
                            </Card.Text>
                            <a href="https://www.linkedin.com/in/kylewhiteseattle/">
                                <Image src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Linkedin_glyph_svg-256.png" fluid style={{ height: '30px' }} />
                            </a>
                            <a href="https://github.com/JCLEYVA">
                                <Image src="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-256.png" fluid style={{ height: '30px', marginLeft: '10px' }}></Image>
                            </a>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://media.licdn.com/dms/image/D4E03AQG6Zf9eiYM9kQ/profile-displayphoto-shrink_200_200/0/1677264412510?e=1688601600&v=beta&t=ofp7eJZb0tSvzOMKjFXcoSgj8wJcenlmYVmzhY8AMwM" />
                        <Card.Body>
                            <Card.Title>Joshua Coffey</Card.Title>
                            <Card.Text>
                                I am a highly motivated developer who loves creating user friendly websites that make the users experience enjoyable.{' '}
                            </Card.Text>
                            <a href="https://www.linkedin.com/in/joshuacoffey23/">
                                <Image src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Linkedin_glyph_svg-256.png" fluid style={{ height: '30px' }}></Image>
                            </a>
                            <a href="https://github.com/Coff23">
                                <Image src="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-256.png" fluid style={{ height: '30px', marginLeft: '10px' }}></Image>
                            </a>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://media.licdn.com/dms/image/C5603AQEGAyIexLQbRg/profile-displayphoto-shrink_200_200/0/1593557630244?e=1688601600&v=beta&t=SfLJXLxwNe88LVzDsCVmKdSIAcR2oRr6Q5YLO-DvIWg" />
                        <Card.Body>
                            <Card.Title>Kyle White</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This card has even longer content than the
                                first to show that equal height action.
                            </Card.Text>
                            <a href="https://www.linkedin.com/in/kylewhiteseattle/">
                                <Image src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Linkedin_glyph_svg-256.png" fluid style={{ height: '30px' }} />
                            </a>
                            <a href="https://github.com/K1ng-T0ast">
                                <Image src="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-256.png" fluid style={{ height: '30px', marginLeft: '10px' }}></Image>
                            </a>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/43771360?v=4" />
                        <Card.Body>
                            <Card.Title>Juan Olmeda</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This card has even longer content than the
                                first to show that equal height action.
                            </Card.Text>
                            <a href="https://www.linkedin.com/in/juan-olmedo-5613784a/">
                                <Image src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Linkedin_glyph_svg-256.png" fluid style={{ height: '30px' }} />
                            </a>
                            <a href="https://github.com/carlitos-1988">
                                <Image src="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-256.png" fluid style={{ height: '30px', marginLeft: '10px' }}></Image>
                            </a>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </>
        )
    }
}

export default About;