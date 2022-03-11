import React, { useEffect } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Boards from "../components/Boards";
import SideMenu from "../components/SideMenu";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/actions/userActions";

const Profile:React.FC = () => {
  const token = window.location.hash.substring(7);
  sessionStorage.setItem('token', token);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  });

  return (
    <div>
      <Header />
      <Container>
        <SideMenu />
        <Boards />
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default Profile;
