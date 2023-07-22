// CustomTableModal.js

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setModalData,
  clearModalData,
} from "../features/modal/customModalTableSlice";
import InputCommon from "./CommonComponents/InputCommon";
import { addRow, updateRow } from "../features/table/tableSlice";
import axios from "axios";

function CustomTableModal({ tableData }) {
  const [inputData, setInputData] = useState(
    tableData ?? {
      id: "",
      title: "",
      content: "",
    }
  );
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("login")}`,
  };

  const createPostHandler = async (data) => {
    try {
      await axios.post(
        "https://postfast-c99269e302dd.herokuapp.com/posts",
        data,
        { headers }
      );
    } catch (error) {
      console.log("Error fetching data");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create new data
    const newData = {
      id: inputData.id,
      title: inputData.title,
      content: inputData.content,
    };

    createPostHandler(newData);
    setInputData({ id: "", title: "", content: "" });
  };

  return (
    <div>
      <h4>{false ? "Edit Data" : "Create Data"}</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <InputCommon
            type="text"
            id="title"
            name="title"
            value={inputData.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <InputCommon
            type="text"
            id="content"
            name="content"
            value={inputData.content}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {false != null ? "Update" : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default CustomTableModal;
