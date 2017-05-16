import React from 'react';
import { Link } from 'react-router';

import '../css/GetStarted.css';
import { getStoredObject, storeObject } from '../helpers';

const GetStarted = () => {

  //const logo = "https://pad.chalkysticks.com/d41f6.svg";
  const logo = "http://billiarduniversity.salvatore.us/images/bu_logo.jpg";
  // Mechanism to clear localStorage on devices, during testing.
  if(getStoredObject('flag')) {
    console.log('Flag exists');
  } else {
    localStorage.clear();
    console.log('No flag, so storage was cleared');
    storeObject('flag', 1);
  }
  
  return (
    <section className="GetStarted">

      <div className="center">
        <div className="logo">
          <img src={logo} alt="Billiard Universtiy" />
        </div>
        <h1 className="anim-slideDown">BU Exam Prep</h1>
        {/*<h2>Billiard University<br />Exam Preparation</h2>*/}
       </div>
       <div className="center">
          <p>Track and monitor your drill<br />performance in preparation for<br />taking the Billiard University Exams</p>
      </div>

      <Link to="/info"><button className="btn-primary anim-zoomIn">Get Started</button></Link>
      
    </section>
  );
}

export default GetStarted;
