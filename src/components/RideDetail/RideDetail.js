import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import man from '../../images/peopleicon.png';
import { useParams } from 'react-router';
import fakeData from '../../data/fakeData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStreetView, faMapPin } from '@fortawesome/free-solid-svg-icons'
import mapimg from '../../images/Map.png'

const RideDetail = () => {

    const { rideKey } = useParams();
    const ride = fakeData.find(item => rideKey === item.key);
    const { key, img, seat, charge } = ride;


    const [pickFrom, setPickFrom] = useState('');
    const [pickTo, setPickTo] = useState('');

    const showDetails = () => {
        document.getElementById('getRide').style.display = 'none';
        document.getElementById('rideInfo').style.display = 'block';
    }
    return (
        <Container>
            <Row className="py-5">
                <Col xs={12} md={4}>
                    <div id="getRide" className="bg-light rounded p-4">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Pick From</label>
                            <input id="startLocation" type="text" class="form-control" placeholder="Pick From" onBlur={e => setPickFrom(e.target.value)}></input>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Pick To</label>
                            <input id="endLocation" type="text" class="form-control" placeholder="Pick To" onBlur={e => setPickTo(e.target.value)}></input>
                            <button onClick={showDetails} className="btn btn-primary btn-lg btn-block my-3">Search</button>
                        </div>
                    </div>

                    <div id="rideInfo" style={{ display: 'none' }}>
                        <div className="bg-light p-4 rounded">
                            <div className="text-white bg-danger my-1 mb-1 p-2 rounded shadow">
                                <div class="form-group">
                                    <FontAwesomeIcon icon={faStreetView} />
                                    <label className="pl-2" for="exampleInputEmail1"><h5>{pickFrom}</h5></label>
                                </div>
                                <div class="form-group">
                                    <FontAwesomeIcon icon={faMapPin} />
                                    <label className="pl-2" for="exampleInputEmail1"><h5>{pickTo}</h5></label>
                                </div>
                            </div>
                            <div class="form-group">
                                <div className="d-flex justify-content-around align-items-center bg-white mt-3 p-2 rounded shadow">
                                    <div> <img className="img-fluid p-3" src={img} alt="" /> </div>
                                    <div> <h6 className="px-1">{key}</h6></div>
                                    <div><img className="img-fluid px-1" src={man} alt="" /></div>
                                    <div><h6 className="px-1">{seat}</h6></div>
                                    <div><h6 className="px-1">{charge}</h6></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={8}>
                <img className="img-fluid p-3" src={mapimg} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default RideDetail;