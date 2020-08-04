import React from "react";
import "./datatable.style.css";

const DataTable = (props) => {
  const cols = props.col;
  const rows = props.rows;
  console.log(rows);
  return (
    <div className="grid">
      {cols.map((col) => (
        <span>{col}</span>
      ))}
      {
      rows.map((row) => {
       return(
       <span key={row.id}>{row.id}</span>
        )  
      })
      }
    </div>
  );
};

export default DataTable;
