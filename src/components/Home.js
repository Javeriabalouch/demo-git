import React, { useState } from "react";

function Home({ submit, name }) {
  const [data, setData] = useState("klkl");

  const submitHandler = (e) => {
    debugger;
    e.preventDefault();
    setData((prev) => [...prev, data]);
    submit(data);
    setData("");
  };

  return (
    <div>
     
      <input
        type="text"
        name="data"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={submitHandler}>SUBMIT</button>
      
      <h4>{name}</h4>

    </div>
  );
}

export default Home;
