import React from "react";
import User from "../components/User";

import { connect } from "react-redux";

const PeopleList = props => {
  return (
    <div className="people-list" id="people-list">
      <ul className="list">
        {props.people.map(p => {
          return <User key={p.id} userName={p.userName} />;
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    people: state.peopleReducer
  };
};

export default connect(mapStateToProps)(PeopleList);
