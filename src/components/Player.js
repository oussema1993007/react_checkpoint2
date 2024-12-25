import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function player({ name, team, nationality, jerseyNumber, age, image }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} style={{ width: '300px', height: '400px' }} />
            <Card.Body>
                <Card.Title style={{ fontSize: 25 }}>{name}</Card.Title>
            </Card.Body>
            <ListGroup>
                <ListGroup.Item style={{ fontSize: 20 }}>{team}</ListGroup.Item>
                <ListGroup.Item>{nationality}</ListGroup.Item>
                <ListGroup.Item>{jerseyNumber}</ListGroup.Item>
                <ListGroup.Item>{age}</ListGroup.Item>
            </ListGroup>
        </Card>
    );
}

export default player;