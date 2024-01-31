import * as React from "react";

import { request } from "../axios_helper";

export default class AuthContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    request("GET", "http://localhost:8080/auth/message", {}).then(
      (response) => {
        this.setState({ data: response.data });
      }
    );
  }

  render() {
    return (
      <div>
        {/* {this.state.data &&
          this.state.data.map((line) => <li key={line}>{line}</li>)} */}
      </div>
    );
  }
}
