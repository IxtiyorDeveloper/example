import React from "react";
import { useHistory } from "react-router-dom";
import Header from "./header/Header";
import SideBar from "./SideBar/SideBar";

const Layout = (props) => {
  const history = useHistory();

  return (
    <div>
      <SideBar />
      <div>
        <Header/>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default React.memo(Layout);
