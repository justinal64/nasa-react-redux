import React, { Component } from "react";
import AstronomyCard from "./AstronomyCard";
import { connect } from "react-redux";
import randomData from "../../actions/random_data";

class UserContainer extends Component {
  componentWillMount() {
    this.props.randomData();
  }

  render() {
    return (
      <div>
        <h3>Hello from the user container</h3>
        <button onClick={this.props.randomData}>Button</button>
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

export default connect(mapStateToProps, { randomData })(UserContainer);
