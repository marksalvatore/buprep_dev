import React from 'react';
import { Link } from 'react-router';

import '../css/Info.css';
import Nav from './Nav';

const Info = () => {
  return (
      <section className="Info">

        <Nav />

        <h2>Info</h2>

        <div className="text-left">
          <p><em><Link to="/">BU Exam Prep</Link></em> is a free app designed to work on your phone or tablet to assist you as you prepare to take <a href="http://billiarduniversity.org/exams.html">Billiard University Exams I & II</a>.</p>
          <p><em><Link to="/">BU Exam Prep</Link></em> contains all of the same drills for all levels of the two exams. The app provides a way to track your performance of these drills, so you can identify what you need to focus on in your practice.
          </p>
          <p>While the drills are the same as the exams, be aware that the method of scoring differs from official scoring. We did this to limit the effort required to record your score. This makes the app easier to use and less of a disruption as you move from the table, to your phone, and back to the table again.
          </p>
          </div>

          <h2>Instructions</h2>
          <div className="text-left">

          <p>To begin, click the <strong>+ New</strong> tab to create a routine.</p>
          <p>Then select the specific drills you would like to include in your new routine. The routine will be named for the day of the week you select from the list.</p>
          <p>The routines you create will display in the <strong>Routines</strong> tab. Select the routine you want to practice, then click the <strong>Setup</strong> button to see a diagram of the drill and to read the rules for setting up, performing, and scoring it.</p> 
          <p>Click <strong>Score</strong> to enter the number of shots you took in the drill.</p>
          <p>Your new score will be saved and compared to future scores for that drill, which you can view by clicking the drill's <strong>History</strong> button.</p>
          <p>The <strong>Stats</strong> tab will display all drills you recorded to date, showing each drill along with its combined average for that drill.
          </p>
          <p>For convenience, you might decide to put all drills into one routine, or opt to group the drills into multiple routines. It doesn't matter that a drill is placed in multiple routines. Scores will always apply to the drill, regardless of which routine contains it. Likewise, deleting a drill or a routine will not impact past drill scores. Routines are really just a bucket to hold the drills you want to work on. Drills live beyond any routine they might be associated with, and can only be deleted by clearing your browser's storage/cache.
          </p>
          <p>Be aware that the current version of the app saves your score history in your browser's storage, so clearing data from your browser might clear your drill history.</p>
        </div>

        <h2>About</h2>
        <div className="text-left">
          <p>Conceived, designed and developed by <a href="http://www.salvatore.us">Mark Salvatore</a> with the permission and support of <a href="http://billiarduniversity.org">Dr. Dave Alciatore and the Billiard University</a>. May 2017.</p>
        </div>

      </section>
  );
}

export default Info;
