import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";

function Container() {
  return (
    <div className=" flex flex-col " >
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default Container;
