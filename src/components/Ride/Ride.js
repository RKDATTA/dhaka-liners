import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Ride.css'

const Ride = (props) => {
    const { key, img } = props.data;
    return (
        <Col className="mt-5" xs={12} md={3}>
            <Card className="p-4 text-center mt-5 shadow">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="py-3 ride-title"><Link to={`destination/${key}`}>{key}</Link></Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Ride;