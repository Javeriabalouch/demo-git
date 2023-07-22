import React from "react";

function InputCommon(props) {
  const { type, id, name, value, onChange, ...rest } = props;
  return (
    <div>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
}

export default InputCommon;
