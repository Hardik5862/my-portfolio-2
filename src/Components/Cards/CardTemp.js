import React from 'react';
import Card from 'react-bootstrap/Card';

function CardTemp({ icon, title, desc, link, txt }) {
  return (
    <Card border='primary' style={{ width: '18rem', margin: '0.8rem'}}>
	  <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/${icon}`} />
	  <Card.Body>
	    <Card.Title>{title}</Card.Title>
	    <Card.Text style={{fontSize: '0.9rem'}}>
	      {desc}
	    </Card.Text>
	    <Card.Link href={link}>{txt}</Card.Link>
	  </Card.Body>
	</Card>
  );
}

export default CardTemp;
