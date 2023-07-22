import React from "react";
import ButtonDataCommon from "./CommonComponents/ButtonDataCommon";
import {useNavigate} from "react-router-dom";
function Logout({handleLogout}) {
  const navigate = useNavigate();
  
  return (
    <div>
      <ButtonDataCommon label="Logout"  onClick = {()=>handleLogout(navigate("/login"))}/>
    </div>
  );
}

export default Logout;
