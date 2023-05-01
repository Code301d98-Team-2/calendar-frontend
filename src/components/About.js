import { Component } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

class About extends Component{
    render(){
        return(
            <>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/121666413?v=4" />
                    <Card.Body>
                    <Card.Title>Jeanette Leyva</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
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
                        This card has supporting text below as a natural lead-in to
                        additional content.{' '}
                    </Card.Text>
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
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/115496158?v=4" />
                    <Card.Body>
                    <Card.Title>Yaz Ahmed</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This card has even longer content than the
                        first to show that equal height action.
                    </Card.Text>
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