import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';

function HomePage() {
  return (
    <>
    <div className="cards">
        <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="src/assets/beers.png" />
      <Card.Body>
        <Card.Title><Link to="/beers"> <h1>All Beers</h1> </Link></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        </Card.Body>
    </Card>
<br />
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="src/assets/random-beer.png" />
      <Card.Body>
        <Card.Title><Link to="/random-beer"> <h1>Random Beer</h1> </Link></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        </Card.Body>
    </Card>
<br />
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="src/assets/new-beer.png" />
      <Card.Body>
        <Card.Title><Link to="/new-beer"> <h1>New Beer</h1> </Link></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        </Card.Body>
    </Card>
  
</div>
    </>
  );
}

export default HomePage;
