import React from "react";

export default function ReactBasics({ name, submit }) {
  let [newName, setNewName] = React.useState("");
  return (
    <div>
      <p>{name}</p>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="update name"
      />
      <button onClick={() => submit(newName)}>Submit</button>
    </div>
  );
}
