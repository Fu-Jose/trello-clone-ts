import React from "react";
import styled from "styled-components";

const Background = () => {
  return (
    <BgContainer>
      <div className="left"></div>
      <div className="right"></div>
    </BgContainer>
  );
};

const BgContainer = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #f9fafc;
  z-index: -900;
`;

export default Background;
