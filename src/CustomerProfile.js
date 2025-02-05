import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const CustomerProfile = ({ id }) => {
  const [profile, setProfile] = useState("");

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(response => response.json())
      .then(data => {
        setProfile(data);
        console.log(data);
      });
  }, [id]);

  if (!id) {
    return null;
  }

  return (
    <div>
      <ul className="profile">
        <li>Customer Id : {profile.id}</li>
        <li>
          Customer Name : {profile.firstName} {profile.surname}
        </li>
        <li>Customer Email : {profile.email}</li>
        <li>Customer Phone : {profile.phoneNumber}</li>
        {profile.vip && <li>VIP</li>}
      </ul>
    </div>
  );
};

export default CustomerProfile;
