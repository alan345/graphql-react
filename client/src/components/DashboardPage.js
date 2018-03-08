import React from 'react';

export default (props) => {
  console.log(props.data)
  const users = props.data.users;

  if (!users) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Loading</h1>
          </div>
        </div>
      </div>
    );
  }

  function deleteRow(id, e) {
    // console.log(userId);

    props.deleteUser({
      variables: { id },
    })
    // props.deleteUser({userId: userId})
    // props.deleteUser(userId)


  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Users</h1>
          <table className="table mt-2">
            <thead>
              <tr>
                <th>#</th>
                <th>id</th>
                <th>First name</th>
                <th>Last Name</th>
                <th>BirthDate</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users && users.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.birthDate}</td>
                  <td>{user.email}</td>
                  <td onClick={(e) => deleteRow(user.id, e)}>Delete</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
};
