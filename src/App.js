import React from "react";
import { useState } from "react";

function App() {
  const apiURL = "https://randomuser.me/api/";
  const [userData, setUserData] = useState([]);

  const fetchUserData = async () => {
    const response = await fetch(apiURL).then((res) => res.json());

    console.log(response.results[0]);

    setUserData(response.results[0]);
  };

  const displayUserData = (userData) => {
    if (userData.length === 0) return;

    return (
      <React.Fragment>
        <img src={userData.picture.medium} />
        <p>
          Full Name: {userData.name.first} {userData.name.last}
        </p>
        <p>Gender: {userData.gender}</p>
        <p>Email: {userData.email}</p>
        <p>Cell phone: {userData.cell}</p>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <button onClick={fetchUserData}>Fetch Data</button>
      <div>{displayUserData(userData)}</div>
    </React.Fragment>
  );
}

export default App;
