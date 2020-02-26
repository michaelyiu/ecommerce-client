import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Header: React.FC = () => {
  const { user, role } = useContext(UserContext);
  return (
    <header>
      <h1>Shop</h1>
    </header>
  );
};

export default Header;
