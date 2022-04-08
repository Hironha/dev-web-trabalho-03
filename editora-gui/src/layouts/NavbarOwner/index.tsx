import React from "react";

import Header from "components/Header";

const NavbarOwner: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default NavbarOwner;
