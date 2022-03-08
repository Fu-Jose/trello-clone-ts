import React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <FooterC>
      <LangContainer>
        <select name="lang" id="lang">
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="italian">Italian</option>
        </select>
      </LangContainer>
      <div>
        <hr />
        <Logo
          className="atlassian-logo"
          style={{ width: "150px" }}
          src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/16006ae28f149063408d601e8c80eddc/atlassian-logo-blue-small.svg"
        />
      </div>
      <List>
        <Item>
          <a href="/templates">Templates</a>
        </Item>
        <Item>
          <a href="/pricing">Pricing</a>
        </Item>
        <Item>
          <a href="/apps">Apps</a>
        </Item>
        <Item>
          <a href="/jobs">Jobs</a>
        </Item>
        <Item>
          <a href="/blog">Blog</a>
        </Item>
        <Item>
          <a href="/developers">Developers</a>
        </Item>
        <Item>
          <a href="/about">About</a>
        </Item>
        <Item>
          <a href="/help">Help</a>
        </Item>
        <Item>
          <a href="/cookies">Cookies</a>
        </Item>
        <Item>
          <a href="/settings">Settings</a>
        </Item>
      </List>
    </FooterC>
  );
};

const FooterC = styled.footer`
  text-align: center;
  max-width: 45%;
  margin-left: auto;
  margin-right: auto;
`;

const LangContainer = styled.div`
  display: inline-block;
  margin: 0;
  padding: 0;
  position: relative;
  & select {
    border: 2px solid #edeff0;
    padding: 0.5rem 1rem;
  }
`;

const Logo = styled.img`
  margin: 10px auto;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 10px 0;
  padding-left: 0;
`;

const Item = styled.li`
  margin: 5px;
  & a {
    text-decoration: none;
  }
`;

export default Footer;
