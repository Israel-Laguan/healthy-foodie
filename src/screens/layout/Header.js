import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const Header = ({ search }) => (
  <Navbar color="primary" dark expand="md">
    <NavbarBrand href="/" className="mr-auto">
      <img
        src="https://img.icons8.com/cotton/64/000000/take-away-food.png"
        alt="Logo"
      />
      Healthy Food
    </NavbarBrand>
    {search}
  </Navbar>
);

export default Header;
