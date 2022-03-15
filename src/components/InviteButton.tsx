import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../client/axios";

const InviteButton = () => {
  const [email, setEmail] = useState("");
  const { id } = useParams();
  const handleInvite = async () => {
    try {
      const { data } = await axios.put(
        `/boards/${id}/members?email=${email}&key=${
          process.env.REACT_APP_API_KEY
        }&token=${sessionStorage.getItem("token")}`
      );
      console.log(data);
      console.log("INVITE", email, id);
      setEmail("");
    } catch (error) {
      alert(error);
      setEmail("");
    }
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bx bx-user-plus"></i>Invite
      </button>
      <ul
        className="dropdown-menu text-center p-1"
        aria-labelledby="dropdownMenuButton1"
      >
        <li className="m-1">
          <input
            className="dropdown-item"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </li>
        <button className="btn btn-success m-1" onClick={handleInvite}>
          Send Invite
        </button>
      </ul>
    </div>
  );
};

export default InviteButton;
