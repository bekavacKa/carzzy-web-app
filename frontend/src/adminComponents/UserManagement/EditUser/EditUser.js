import React from 'react'
import Modal from 'react-modal'
import { useDispatch } from 'react-redux';
import ModalStyle from '../../../assets/ModalStyle'
import { setLoader } from '../../../redux/loaderSlice';
import AdminService from '../../../services/AdminService';
import  './edit-user.scss';

function EditUser({showModal, selectedUser, updateDb}) {

  
  const dispatch = useDispatch();


  const cancelEdit = () => {
    showModal(false);
  }

  const confirmEdit = () => {

  }

  const handleInputChange = (e) => {

  }

  return (
    <>
    <Modal isOpen={true} ariaHideApp={false} style={ModalStyle}>
      <div className='edit-user-admin'>
        <h2>EDIT USER</h2>
        <h3>{selectedUser.username}</h3>

        <label htmlFor="firstName">First Name</label>
          <input id="firstName" 
                  type ="text"
                  name="firstName" 
                  className='edit-user-admin-input'
                  defaultValue={selectedUser?.firstName}
                  onChange={(e) => {handleInputChange(e)}} />

          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" 
                  type ="text" 
                  name="lastName" 
                  className='edit-user-admin-input'
                  defaultValue={selectedUser?.lastName}
                  onChange={(e) => {handleInputChange(e)}} />

          <label htmlFor="city">City</label>
          <input id="city" 
                  type ="text"
                  name="city"   
                  className='edit-user-admin-input'
                  defaultValue={selectedUser?.city}
                  onChange={(e) => {handleInputChange(e)}}/>

          <label htmlFor="username">Username</label>
          <input id="username" 
                  type ="text" 
                  name="username" 
                  className='edit-user-admin-input'
                  defaultValue={selectedUser?.username}
                  onChange={(e) => {handleInputChange(e)}} />

          <label htmlFor="email">E-mail</label>
          <input id="email" 
                  type ="email" 
                  name="email" 
                  className='edit-user-admin-input'
                  defaultValue={selectedUser?.email}
                  onChange={(e) => {handleInputChange(e)}} />

          <label htmlFor="password">Password</label>
          <input id="password" 
                  type ="password" 
                  name="password" 
                  className='edit-user-admin-input'
                  defaultValue={selectedUser?.password}
                  onChange={(e) => {handleInputChange(e)}} />
        </div>
        

      <button onClick={confirmEdit}> confirm </button>
      <button onClick={cancelEdit}> cancel </button>
    </Modal>
    </>
  )
}

export default EditUser