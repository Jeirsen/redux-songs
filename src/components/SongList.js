import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  state = {};
  render() {
    return <div>Song List</div>;
  }
}

export default connect()(SongList);
