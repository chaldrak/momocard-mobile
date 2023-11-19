import React, { Component } from "react";
import { Redirect } from "expo-router";

export class index extends Component {
  render() {
    return <Redirect href="/dashboard/" />;
  }
}

export default index;
