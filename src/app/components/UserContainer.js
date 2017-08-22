import React, { Component } from "react";
import AstronomyCard from "./AstronomyCard";
import { connect } from "react-redux";
import randomData from "../../actions/random_data";
import UserCard from "./UserCard";

class UserContainer extends Component {
  componentWillMount() {
    this.props.randomData();
  }

  render() {
    return (
      <div>
        <UserCard data={this.props.data} />
        <button onClick={this.props.randomData}>Update randomData</button>
      </div>
    );
  }
}

// connect react with redux
// @params mapStateToProps (necessity)
// @params mapDispatchToProps (optional)
function mapStateToProps(state) {
  return { data: state.randomData };
}

export default connect(mapStateToProps, { randomData })(UserContainer);
