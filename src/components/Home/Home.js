import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import fakeData from '../../data/fakeData.json';
import Ride from '../Ride/Ride';
import './Home.css';

const Home = () => {
    const [rides, setRides] = useState([]);
    useEffect(() => {
        setRides(fakeData)
    }, [])
    return (
        <div>
            <Container>
                <Row>
                    {rides.map(ride => <Ride key={ride.key} data={ride}></Ride>)}
                </Row>
            </Container>
        </div>
    );
};

export default Home;