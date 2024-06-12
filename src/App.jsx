/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import HomePageRoute from './Routes/HomePageRoute';
import NavHome from './Components/NavHome';
import InvitationManager from './Routes/InvitationManager ';

const App = () => {
  return (
    <Router>
      <NavHome />
      <HomePageRoute />
      <InvitationManager />
    </Router>
  );
};

export default App;