import React from "react";

function ButtonDataCommon(props) {
  const { onClick, label, className } = props;
  return (
    <div>
      <button className={className} onClick={onClick}>
        {label}
      </button>
    </div>
  );
}

export default ButtonDataCommon;
