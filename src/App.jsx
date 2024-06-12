/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePageRoute from './Routes/HomePageRoute';
import InvitationManager from './Routes/InvitationManager ';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<HomePageRoute />} />
        <Route path="/dashboard/*" element={<InvitationManager />} />
      </Routes>
    </Router>
  );
};

export default App;
