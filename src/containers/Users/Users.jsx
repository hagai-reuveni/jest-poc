import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../actions';

export const Users = ({ users, fetchUsers }) => (
  <div>
    <h2>Users</h2>
    <p>This is a mock users' page (for testing async actions)</p>
    <button onClick={fetchUsers}>Get Users</button>
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
  fetchUsers: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  users: state.userReducer,
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => {
    dispatch(actions.fetchUsers());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
