import React,{useState} from "react";
import ButtonDataCommon from "./CommonComponents/ButtonDataCommon";
import Logout from "./Logout";
import Login from "./Login";

function Nav() {
  const [logout, setIslogOut] = useState(true);
  return (
    <div>
      <ButtonDataCommon label={logout ? <Logout/> : <Login/>} />
    </div>
  );
}

export default Nav;
