import React from "react";
import styled from "styled-components";

const ModalCardMenu: React.FC = () => {
  return (
    <Menu>
      <SubMenu>
        <MenuText>Add to card</MenuText>
        <Button>
          <i className="bx bx-user mx-2" />
          Members
        </Button>
        <Button>
          <i className="bx bx-purchase-tag bx-rotate-270 mx-2" />
          Labels
        </Button>
        <Button>
          <i className="bx bx-check-square mx-2" />
          Checklist
        </Button>
        <Button>
          <i className="bx bx-time-five mx-2" />
          Dates
        </Button>
        <Button>
          <i className="bx bx-paperclip bx-rotate-90 mx-2" />
          Attachment
        </Button>
        <Button>
          <i className="bx bxs-dock-bottom mx-2" />
          Cover
        </Button>
        <Button>
          <i className="bx bxs-layout mx-2" />
          Custom Fields
        </Button>
      </SubMenu>
      <SubMenu>
        <MenuText>Power-Ups</MenuText>
        <Button className="no-bg">
          <i className="bx bx-plus mx-2" />
          Add Power-Ups
        </Button>
      </SubMenu>
      <SubMenu>
        <MenuText>Automation</MenuText>
        <Button className="no-bg">
          <i className="bx bx-plus mx-2" />
          Add button
        </Button>
      </SubMenu>
      <SubMenu>
        <MenuText>Actions</MenuText>
        <Button>
          <i className="bx bx-right-arrow-alt mx-2" />
          Move
        </Button>
        <Button>
          <i className="bx bx-copy-alt mx-2" />
          Copy
        </Button>
        <Button>
          <i className="bx bxs-layout mx-2" />
          Make template
        </Button>
        <Button>
          <i className="bx bx-show-alt mx-2" />
          Watch
        </Button>
        <Button>
          <i className="bx bx-box mx-2" />
          Archive
        </Button>
        <Button>
          <i className="bx bx-share-alt mx-2" />
          Share
        </Button>
      </SubMenu>
    </Menu>
  );
};

export default ModalCardMenu;

const Menu = styled.div`
  padding: 0px 0px 10px 10px;
`;

const MenuText = styled.span`
  color: #919bab;
  font-size: 12px;
  font-weight: 600;
`;

const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 15px;
`;

const Button = styled.button`
  text-align: start;
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 3px;
  border: 1px transparent;
  &:hover {
    background-color: #e2e4e9;
  }
  &.no-bg {
    background-color: transparent;
  }
  &.no-bg:hover {
    background-color: #e2e4e9;
  }
`;
