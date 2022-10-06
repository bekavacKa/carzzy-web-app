import React, { useEffect, useState } from 'react';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import AuthService from '../../services/AuthService';
import './all-users.scss';

function AllUsers() {

  const [users, setUsers] = useState();

  useEffect(() => {
    AuthService.getAllUsers()
                .then((res) => setUsers(res.data))
                .catch((err) => console.log(err))
  }, [])
  

  const usersLayout = () => {
    return users.map((user, index) => {
      return (
        <tr key={index}>
          <th scope="row">{index + 1}.</th>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.wallet}</td>
          <td>{user.isActive}</td>
          <td>{user.isAdmin}</td>
          <td className='all-users-btns'>
            <FaRegEdit className='all-users-edit' title='EDIT'/>
            <FaTrashAlt className='all-users-delete' title='DELETE' />
          </td>
        </tr>
      )
    })
  }

  return (
    <div className='all-users-wrapper'>
      <h2>AllUsers</h2>

      {
        users?.length && 
        <table className="all-users-table">
        <thead>
          <tr>
            <th scope="col">NO.</th>
            <th scope="col">username</th>
            <th scope="col">email</th>
            <th scope="col">wallet</th>
            <th scope="col">Active ?</th>
            <th scope="col">Admin ?</th>
          </tr>
        </thead>
        <tbody>
          {usersLayout()}
        </tbody>
      </table>
      }
    </div>
  )
}

export default AllUsers