import React from "react";
export default function ProgramAccoridan() {
  return (
    <div>
      <div className="container">
      <ul className="accordion">
      <li className="tabs">
        <div className="social-links twitter-icon">
          <a href="https://twitter.com/renettarenula">twitter</a>
        </div>
        <div className="paragraph">
          <h1>Twitter</h1>
          <p>My thoughts in 140 characters or less. Sometimes, I do not know how to correctly use Twitter.</p>
        </div>
      </li>
      <li className="tabs">
        <div className="social-links facebook-icon">
          <a href="https://facebook.com">Facebook</a>
        </div>
        <div className="paragraph">
          <h1>Facebook</h1>
          <p>Where I get to stalk my friends and let them stalk me. A place to get people to stroke your ego.</p>
        </div>
      </li>
      <li className="tabs">
        <div className="social-links linkedin-icon">
           <a href="https://my.linkedin.com/pub/aysha-anggraini/49/a82/a05/">LinkedIn</a>
        </div>
        <div className="paragraph">
          <h1>LinkedIn</h1>
          <p>I act totally professional on this one. It is what the recruiters see, you see.</p>
        </div>
      </li>
      <li className="tabs">
        <div className="social-links insta-icon">
          <a href="http://instagram.com/renettarenula">Instagram</a>
        </div>
        <div className="paragraph">
          <h1>Instagram</h1>
          <p>Where I post my duckface pictures. Occasionally, I would post pictures of my food and my cats.</p>
        </div>
      </li>
      <li className="tabs">
        <div className="social-links youtube-icon">
          <a href="https://youtube.com">Youtube</a>
        </div>
        <div className="paragraph">
          <h1>YouTube</h1>
          <p>Just kidding! I do not have a YouTube account. I'm not too fond of the camera.</p>
        </div>
      </li>
    </ul>
      </div>
    </div>
  );
}
