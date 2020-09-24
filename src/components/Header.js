import React from "react";
import "../styles/Header.css";
import Dropdown from "react-bootstrap/Dropdown";

const Header = () => {
  return (
    <div className='header-container'>
      <Dropdown className='dropdown'>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Todos
        </Dropdown.Toggle>
        <Dropdown.Menu  align='left' className='dropdown-menu'>
          <Dropdown.Item className='menu-item'>TODO1</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item className='menu-item'>TODO2</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item className='menu-item'>TODO3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <h1>Todo1</h1>
    </div>
  );
};

export default Header;
