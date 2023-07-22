// Profile.js

import React from "react";

const Profile = () => {
  return (
    <div className="profile">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
        alt="Profile"
        width="50px"
        height="50px"
      />
      <h2>John Doe</h2>
      <p>Bio: Software Developer</p>
      <div>
        <div>
          Qualification:<span>MASTER</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
