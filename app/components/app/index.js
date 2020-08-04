import React from "react";
import { render } from "react-dom";
import Header from "../header/header.component.js";
import Payments from "../payments/payments.component";
import DataTable from "../datatable/datatable.component";

import data from "../datatable/data.json";
import "./index.style.css";

class App extends React.Component {
  render() {
      let cols = ["Payment status", "Payment type", "Customer", "Amount"];
    return (
      <div className="container">
          <Header />
          <Payments />
          <DataTable col={cols} rows={data}/>
      </div>
    );
  }
}


render(<App>
</App>, document.getElementById("app"));