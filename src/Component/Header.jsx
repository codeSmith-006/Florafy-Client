import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";

const Header = () => {
  const { name } = use(AuthContext);
  console.log(name);
  return <div>
    
  </div>;
};

export default Header;
