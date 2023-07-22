import React, { useState } from "react";
import { Table } from "reactstrap";
import CustomTableModal from "./CustomTableModal";
import ButtonDataCommon from "./CommonComponents/ButtonDataCommon";


function MyPosts() {
  const [isOpen, setIsOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const rowModalHandler = (id) => {
    const editedData = tableData.find((item) => item.id === id);
    if (editedData) {
      setEditData(editedData); // Set the edit data
    } else {
      setEditData(null);
    }
    setIsOpen(true);
  };

  const [tableData, setTableData] = useState([
    {
      id: 1,
      title: "Title 1",
      content: "Content 1",
    },
    {
      id: 2,
      title: "Title 2",
      content: "Content 2",
    },
    {
      id: 3,
      title: "Title 3",
      content: "Content 3",
    },
  ]);
  const deleteHandler = (id) => {
    debugger;
    const createData = tableData.filter((item) => item.id !== id);
    setTableData(createData);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>My Posts</h1>
        <ButtonDataCommon
          className="btn btn-secondary"
          onClick={rowModalHandler}
          label="Create"
        ></ButtonDataCommon>
      </div>
      <div style={{ flex: "3  " }}>
        <Table style={{ width: "100%" }}>
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th scope="col" style={{ fontWeight: "bold" }}>
                Id
              </th>
              <th scope="col" style={{ fontWeight: "bold" }}>
                Title
              </th>
              <th scope="col" style={{ fontWeight: "bold" }}>
                Content
              </th>
              <th scope="col" style={{ fontWeight: "bold" }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center" }}>
            {tableData?.map((item, id) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.content}</td>
                <td
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ButtonDataCommon
                    className="btn btn-secondary"
                    onClick={() => deleteHandler(item.id)}
                    label="Delete"
                  ></ButtonDataCommon>
                  <ButtonDataCommon
                    className="btn btn-secondary"
                    onClick={() => rowModalHandler(item.id)}
                    label="Edit"
                  ></ButtonDataCommon>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      {isOpen && (
        <CustomTableModal setTableData={setTableData} editData={editData} />
      )}
    </div>
  );
}

export default MyPosts;
