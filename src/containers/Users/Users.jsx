import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../actions';

export const Users = ({ users, getUsersFromServer }) => (
  <div>
    <h2>Users</h2>
    <p>This is a mock users' page (for testing async actions)</p>
    <button onClick={getUsersFromServer}>Get Users</button>
    <div>
      {
        users.map((user, index)=>{
          return <div key={index}>{`${user.name.first} ${user.name.last}`}</div>
        })
      }
    </div>
  </div>
);

Users.propTypes = {
  users: PropTypes.array.isRequired,
  getUsersFromServer: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  users: state.userReducer,
});

const mapDispatchToProps = dispatch => ({
  getUsersFromServer: () => {
    dispatch(actions.getUsersFromServer());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
