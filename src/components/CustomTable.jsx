import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import CustomTableModal from "./CustomTableModal";
import ButtonDataCommon from "./CommonComponents/ButtonDataCommon";
import { deleteRow, addRow, updateRow } from "../features/table/tableSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setModalData } from "../features/modal/customModalTableSlice";

function CustomTable() {
  const [isOpen, setIsOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const dispatch = useDispatch();
  // const tableData = useSelector((state) => state.table.tableData);
  const [tableData, setTableData] = useState([]);
  const modalData = useSelector((state) => state.customModalTable.modalData);

  const addHandler = () => {
    const newRow = {
      id: "",
      title: "",
      content: "",
    };
    // setModalData(null); // Reset editData
    setIsOpen(true);
    dispatch(addRow(newRow));
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("login")}`,
  };

  const getTableData = async () => {
    try {
      const response = await axios.get(
        "https://postfast-c99269e302dd.herokuapp.com/posts",
        { headers }
      );
      setTableData(response.data);
    } catch (error) {
      console.log("Error fetching data");
    }
  };

  useEffect(() => {
    getTableData()
  }, [])

// const addHandler = async () => {
//   const newRow = {
//     id: "",
//     title: "",
//     content: "",
//     published: ""
//   };

//   try {
//     const response = await axios.post("http://ibrahimbaloch.com/posts", newRow);
    
//     // Handle the response or perform any necessary actions
//     console.log(response.data);

//     // Dispatch the action to update the state
//     dispatch(addRow(newRow));

//     // Reset the form or perform any other necessary tasks
//     // setModalData(null);
//     setIsOpen(true);
//   } catch (error) {
//     // Handle error cases
//     console.error(error);
//   }
// };


  const deleteHandler = (id) => {
    dispatch(deleteRow(id));
  };

 
  const  updateHandler =(id) => {
    debugger;
    const editedData = tableData.find((item) => item.id === id);
    if (editedData) {
      setEditData(editedData);
      // dispatch(updateRow(editedData));
      setIsOpen(true);
      dispatch(setModalData(editedData))
    }
  }

  

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Table Data</h1>
        <ButtonDataCommon
          className="btn btn-secondary"
          onClick={addHandler}
          label="Create"
        />
      </div>
      <div style={{ flex: "3" }}>
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
            {tableData?.map((item, index) => (
              <tr key={item.Post.id}>
                <th scope="row">{index+1}</th>
                <td>{item.Post.title}</td>
                <td>{item.Post.content}</td>
                <td
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ButtonDataCommon
                    className="btn btn-secondary"
                    onClick={() => deleteHandler(item.Post.id)}
                    label="Delete"
                  />
                  <ButtonDataCommon
                    className="btn btn-secondary"
                    onClick={() => updateHandler(item.Post.id)}
                    label="Edit"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      {isOpen && (
        <CustomTableModal
          // modalData={modalData}
        //  updateHandler={updatetHandler}
          tableData={tableData.Post}
        />
      )}
    </div>
  );
}

export default CustomTable;
