import React, { useState, useEffect } from "react";
import CustomTableModal from "./CustomTableModal";
import axios from "axios";
import postServices from "./services/postServices";



function AllPosts() {
  const [isOpen, setIsOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [tableData, setTableData] = useState([]);

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("login")}`,
  };

  useEffect(() => {
    getTableData();
  }, []);

  const getTableData = async () => {
    try {
      const posts = await postServices.getAllPosts();
      setTableData(posts);
    } catch (error) {
      console.log("Error fetching data");
    }
  };
  const deleteHandler = async(id) => {
    try {
      const response = await axios.delete(
        "https://postfast-c99269e302dd.herokuapp.com/posts/"+id,
        { headers }
      );
      if (response.data.status === 201) {
        getTableData();
      }
    } catch (error) {
      console.log("Error fetching data");
    }
  };
  const editHandler = (id) => {
    const editItem = tableData.find((data) => data.id === id);
    setEditData(editItem);
    setIsOpen(true);
  };
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "20px",
      }}
    >
      {tableData.length > 0 ? (
        tableData.map((item, id) => (
          <div style={{ display: "flex" }} key={id + item.Post.title}>
            <div
              className="card"
              style={{
                width: "18rem",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                padding: "20px",
                margin: "20px",
              }}
            >
              <div className="card-body">
                <h4 className="card-title">{item.Post.title}</h4>
                <p className="card-text">{item.Post.content}</p>
                <div
                  className="btn btn-primary"
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    fontSize: "bold",
                  }}
                >
                  <span style={{ margin: "5px" }}>likes: {item.likes}</span>
                  <span
                    style={{ margin: "5px" }}
                    onClick={() => deleteHandler(item.Post.id)}
                  >
                    Delete
                  </span>
                  <span
                    style={{ margin: "5px" }}
                    onClick={() => editHandler(item.Post.id)}
                  >
                    Edit
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
      {isOpen && <CustomTableModal setTableData={setTableData} />}
    </div>
  );
}

export default AllPosts;
