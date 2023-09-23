import React from 'react';
const paddingBottom={
  paddingBottom:"1rem",
  
}

const Table = ({
  queryCur,
  sortType,
  users,
  actAttr,
  activePage,
  maxRowsPerPage,
  activeUser,
  handleDelete,
  handleEdit,
  handleSort
}) => {
  const displayUser = (
    queryCur,
    sortType,
    users,
    actAttr,
    activePage,
    maxRowsPerPage
  ) => {
    return activeUser(queryCur, sortType, users, actAttr).slice(
      (activePage - 1) * maxRowsPerPage,
      activePage * maxRowsPerPage
    );
  };

  const showOrder = attr => {
    return (
      actAttr === attr &&
      (sortType === 1 ? (
        <i className='fas fa-arrow-up sort' />
      ) : (
        sortType === 2 && <i className='fas fa-arrow-down sort' />
      ))
    );
  };

  return (
    <div>
      <table className='table table-sm'
      style={{  borderCollapse: "separate",borderSpacing: "5px 15px"}}>
        <thead  style={{height:"4rem",marginBottom:"2rem",backgroundColor:"#D6A2E8",color:"#2C3A47"}}>
          <tr>
            <th scope='col' style={paddingBottom}>Edit</th>
            <th scope='col' style={paddingBottom}>Delete</th>
            <th scope='col' id='firstname' onClick={e => handleSort(e)} style={paddingBottom}>
              First Name {showOrder('firstname')}
            </th>
            <th scope='col' id='lastname' onClick={e => handleSort(e)} style={paddingBottom}>
              Last Name {showOrder('lastname')}
            </th>
            <th scope='col' id='sex' onClick={e => handleSort(e)} style={paddingBottom}>
              Gender {showOrder('sex')}
            </th>
            <th scope='col' id='age' onClick={e => handleSort(e)} style={paddingBottom}>
              Age {showOrder('age')}
            </th>
          </tr>
        </thead>

        <tbody>
          {displayUser(
            queryCur,
            sortType,
            users,
            actAttr,
            activePage,
            maxRowsPerPage
          ).map(user => {
            return (
              <tr className='user' key={user._id} >
                <td>
                  <button
                    className='btn btn-primary btn-sm'
                    onClick={e => handleEdit(user._id)}
                  >
                    <i className='fas fa-pen' /> Edit
                  </button>
                </td>
                <td>
                  <button
                    className='btn btn-danger btn-sm'
                    onClick={e => handleDelete(user._id)}
                  >
                    <i className='fas fa-trash' /> Delete
                  </button>
                </td>
                <td>
                  <div className='table-data'>{user.firstname}</div>
                </td>
                <td>
                  <div className='table-data'>{user.lastname}</div>
                </td>
                <td>
                  <div className='table-data'>{user.sex}</div>
                </td>
                <td>
                  <div className='table-data'>{user.age}</div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <div>{users.length}</div> */}
    </div>
  );
};

export default Table;
