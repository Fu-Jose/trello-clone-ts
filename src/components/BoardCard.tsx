import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../client/axios";

interface Props {
  id: any;
}

const BoardCard: React.FC<Props> = ({ id }) => {
  const [name, setName] = useState("");

  const getName = async (id: string) => {
    const { data } = await axios.get(
      `board/${id}?key=${
        process.env.REACT_APP_API_KEY
      }&token=${sessionStorage.getItem("token")}`
    );
    setName(data.name);
  };

  useEffect(() => {
    getName(id);
  }, [id]);

  return (
    <Link
      to={`/board/${id}`}
      style={{
        backgroundImage:
          "url('https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x303/c07baf307c2c535f2c72110b18fd7519/photo-1632343095305-923ef5269761.jpg')",
      }}
    >
      <span></span>
      <div className="px-2 py-1">{name}</div>
    </Link>
  );
};

export default BoardCard;
