import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions';
// import db_users from '../db_users.json';

// Components
import TableUsers from '../components/TableUsers';

// Styles
import '../assets/styles/containers/App.scss';

const Users = (props) => {

  useEffect( () => {
    props.getUsers();
  }, []);

  return(
    <div className="margin">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {
            (props.error) ? <h2>Error: {props.error}</h2> :
            (props.loading) ? <h2>Loading..</h2> :
            props.users.map( ({ id, name, email, website }) => <TableUsers key={id} name={name} email={email} website={website} />)
          }
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users,
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = {
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);