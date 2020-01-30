import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Import component for this
import LandingPage from './components/LandingPage';


function App() {
  return (
    <Router>
      <Route path="/" component={LandingPage} />
    </Router>
  );
}

export default App;
