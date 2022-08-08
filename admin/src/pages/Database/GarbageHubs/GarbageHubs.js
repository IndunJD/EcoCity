import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import '../../../assets/styles/Database/database.css';
import '../../../assets/styles/Database/GarbageHubs/GarbageHubs.css';

import SideNav from "../../../common/SideNav";
import GarbageHubsTable from "./tables/GarbageHubsTable";
import GarbageHubsTableFilter from "./filters/GarbageHubsTableFilter";
import GarbageHubsMap from "./maps/GarbageHubsMap";
import CreateGarbageHubModal from "./modals/CreateGarbageHubModal";
import GarbageHubDetailsModal from "./modals/GarbageHubDetailsModal";
import UpdateGarbageHubModal from "./modals/UpdateGarbageHubModal";
import Header from "../../../common/Header";
import {FiFilter} from "react-icons/fi";


const GarbageHubs = () => {
    return (
        <Col className='' lg={10}>
            <Row className='mx-0 section-header '>Garbage Hubs</Row>
            <Row className='mx-0 section-contents d-flex px-0 justify-content-evenly'>
                <Col lg={8} className='column-left box-shadow me-3'>
                    <div className='mt-2 d-flex justify-content-end'>
                        <span className='filter-box px-2 me-3'>
                            Filter
                            <FiFilter color='#228693' size='20px'/>
                        </span>
                    </div>
                    <GarbageHubsTable/>
                </Col>
                <Col lg={4} className='box-shadow'>Map</Col>
            </Row>
        </Col>

    );
}

export default GarbageHubs;
