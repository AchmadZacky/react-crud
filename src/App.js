import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
import TableComponent from "./components/TableComponent";

export default class App extends Component {
  state = {
    users: [
      {
        id: 1,
        nama: "zacky",
        alamat: "Jakarta",
        umur: 19,
        nohp: "089434675334",
      },
      {
        id: 2,
        nama: "alif",
        alamat: "Bandung",
        umur: 19,
        nohp: "08564475334",
      },
      {
        id: 3,
        nama: "budi",
        alamat: "Jogja",
        umur: 22,
        nohp: "08949898634",
      },
    ],
  };

  render() {
    return (
      <div>
        <NavbarComponent />
        <TableComponent users={this.state.users} />
      </div>
    );
  }
}
