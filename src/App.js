import React, { useEffect } from "react";
import Main from "./Main";
import { Switch } from "react-router";
import { connect } from "react-redux";

import "antd/dist/antd.css";
import "./asset/css/base.scss";
import "./asset/css/app.scss";


function App() {
  return (
    <div>
      <Switch>
        <Main />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {

})(App);
