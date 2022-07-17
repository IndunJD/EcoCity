import React from 'react';
import { Container } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router";
import { ToastContainer } from 'react-toastify';
import { useDispatch } from "react-redux";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import CheckYourEmail from "./pages/CheckYourEmail/CheckYourEmail";
import Dashboard from "./pages/Dashboard/Dashboard";
import GarbageHubs from "./pages/Database/GarbageHubs/GarbageHubs";
import TruckDrivers from "./pages/Database/TruckDrivers/TruckDrivers";
import GarbageTrucks from "./pages/Database/GarbageTrucks/GarbageTrucks";
import MaintenanceJobs from "./pages/MaintenanceJobs/MaintenanceJobs";
import Houses from "./pages/Database/Houses/Houses";
import NFCTags from "./pages/Database/NFCTags/NFCTags";
import AreaMap from "./pages/AreaMap/AreaMap";
import Complaints from "./pages/Complaints/Complaints";
import GarbageCollectionRides from "./pages/GarbageCollectionRides/GarbageCollectionRides";

const App = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  return (
    <Container className="App">
      <Routes>
        <Route path={ '/' } element={ <Home /> }/>
        <Route path={ '/login' } element={ <Login /> }/>
        <Route path={ '/forgot-password' } element={ <ForgotPassword /> }/>
        <Route path={ '/check-your-email' } element={ <CheckYourEmail /> }/>
        <Route path={ '/dashboard' } element={ <Dashboard /> }/>
        <Route path={ '/database/garbage-hubs' } element={ <GarbageHubs /> }/>
        <Route path={ '/database/truck-drivers' } element={ <TruckDrivers /> }/>
        <Route path={ '/database/garbage-trucks' } element={ <GarbageTrucks /> }/>
        <Route path={ '/database/maintenance' } element={ <MaintenanceJobs /> }/>
        <Route path={ '/database/house' } element={ <Houses /> }/>
        <Route path={ '/database/nfc-tags' } element={ <NFCTags /> }/>
        <Route path={ '/area-map' } element={ <AreaMap /> }/>
        <Route path={ '/complaints' } element={ <Complaints /> }/>
        <Route path={ '/maintenance' } element={ <MaintenanceJobs /> }/>
        <Route path={ '/garbage-collection' } element={ <GarbageCollectionRides /> }/>
      </Routes>
    </Container>
  );
};

export default App;
