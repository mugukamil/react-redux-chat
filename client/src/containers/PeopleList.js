import React, { Component } from "react";
import User from "../components/User";

import { connect } from "react-redux";

class PeopleList extends Component {
  render() {
    return (
      <div className="people-list" id="people-list">
        <ul className="list">
          {this.props.people.map(p => (
            <User key={p.id} userName={p.userName} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    people: state.peopleReducer
  };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PeopleList);
