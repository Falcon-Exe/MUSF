import React from 'react';
import '../styles/Pages.css';

const Constitution = () => {
  return (
    <div className="constitution-page section-bg-offwhite min-h-screen">
      <header className="page-header pattern-bg section-bg-green text-white">
        <div className="container relative z-10">
          <h1 className="page-title text-white">Constitution</h1>
          <p className="page-subtitle text-white">The founding principles and organizational structure of MUSF.</p>
        </div>
      </header>

      <div className="container section">
        <div className="content-block">
          <h2>Article I: Name and Nature</h2>
          <p>
            The organization shall be known as the Majlis Umariyya Students Federation,
            hereinafter referred to as MUSF. It operates as the official, WSF certified
            student body of Majlis Wafy College.
          </p>

          <h2>Article II: Objectives</h2>
          <ul>
            <li>To promote unity, brotherhood, and cooperation among the students.</li>
            <li>To foster academic excellence alongside moral and spiritual development.</li>
            <li>To organize intellectual, cultural, and sports activities for comprehensive student development.</li>
            <li>To represent student interests and voice concerns to the college administration.</li>
            <li>To engage in social service and community upliftment initiatives.</li>
          </ul>

          <h2>Article III: Membership</h2>
          <p>
            All bona fide students enrolled in Majlis Wafy College automatically hold
            general membership in MUSF and have the right to participate in its activities and
            vote in elections as per the regulations.
          </p>

          <h2>Article IV: Executive Committee</h2>
          <p>
            The executive committee shall consist of a President, Vice President, General Secretary,
            Joint Secretary, Treasurer, and designated members representing various sub-committees
            and language clubs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Constitution;
