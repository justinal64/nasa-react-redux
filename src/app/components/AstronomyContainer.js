import React, { Component } from "react";
import AstronomyCard from "./AstronomyCard";
import { connect } from "react-redux";
import fetchData from "../../actions/fetch_data";
import test from "../../actions/test";

class AstronomyContainer extends Component {
  componentWillMount() {
    this.props.fetchData();
    // this.props.test();
  }

  render() {
    return (
      <div>
        <AstronomyCard data={this.props.astronomy} />
        <button onClick={this.props.test}>Button</button>
      </div>
    );
  }
}

// connect react with redux
// @params mapStateToProps (necessity)
// @params mapDispatchToProps (optional)
function mapStateToProps(state) {
  return { astronomy: state.astronomy };
}

export default connect(mapStateToProps, { fetchData, test })(
  AstronomyContainer
);
