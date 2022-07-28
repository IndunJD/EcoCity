import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import CountCard from "./cards/CountCard";
import WeightCard from "./cards/WeightCard";
import GarbageCollectionWeightGraph from "./graphs/GarbageCollectionWeightGraph";
import GarbageCollectionWeightFilter from "./filters/GarbageCollectionWeightFilter";
import SideNav from "../../common/SideNav";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

const Dashboard = () => {
    return (
        <Col className='' lg={10}>
            <Row className="m-0" style={{border: '2px solid red'}}>
                <Col className="p-0" style={{
                    border: '2px solid blue', fontWeight: 800, fontSize: 30, color: '#075061'}} sm={12}>Hello Nisal,</Col>
                <Col className="p-0" style={{border: '2px solid blue'}} sm={12}>This is what we have got for you today!</Col>
                <Col lg={9} className="p-0" style={{border: '2px solid blue'}}>
                    <Row className="m-0" style={{border: '2px solid green'}}>
                        <Col lg={12} className="p-0" style={{border: '2px solid pink'}}>Garbage Collection Weight</Col>
                        <Col lg={12} className="p-0" style={{border: '2px solid pink'}}>Filter</Col>
                        <Col lg={12} className="p-0" style={{border: '2px solid pink'}}>
                            <Row className="m-0" style={{border: '2px solid yellow'}}>
                                <Col lg={4} className="p-0" style={{border: '2px solid purple'}}>Bins</Col>
                                <Col lg={8} className="p-0" style={{border: '2px solid purple'}}>Chart</Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col lg={3} className="p-0" style={{border: '2px solid blue'}}>
                    <Row className="m-0" style={{border: '2px solid green'}}>
                        <Col lg={12} className="p-0" style={{border: '2px solid pink'}}>Truck Drivers</Col>
                        <Col lg={12} className="p-0" style={{border: '2px solid pink'}}>Maintenance</Col>
                        <Col lg={12} className="p-0" style={{border: '2px solid pink'}}>Garbage Hubs</Col>
                        <Col lg={12} className="p-0" style={{border: '2px solid pink'}}>Houses</Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    );
}

export default Dashboard;
