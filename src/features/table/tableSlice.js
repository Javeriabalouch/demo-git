import { createSlice } from "@reduxjs/toolkit";

const tableSlice = createSlice({
  name: "table",
  initialState: {
    tableData: [
      { id: 1, title: "Title 1", content: "Content 1" },
      { id: 2, title: "Title 2", content: "Content 2" },
      { id: 3, title: "Title 3", content: "Content 3" },
    ],
  },
  reducers: {
    addRow: (state, action) => {
      const newitem = action.payload;
      state.tableData = [...state.tableData, newitem];
    },
    deleteRow: (state, action) => {
      const id = action.payload;
      state.tableData = state.tableData.filter((item) => item.id !== id);
    },
    updateRow: (state, action) => {
      const editData = action.payload;
      const a = state.tableData.map((item) =>
        item.id === editData.id ? editData : item
      );
      state.tableData = a;
    },
  },
});
export const { addRow, deleteRow, updateRow } = tableSlice.actions;
export default tableSlice.reducer;
