import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import ModalStyle from '../../../assets/ModalStyle'
import { setLoader } from '../../../redux/loaderSlice';
import AdminService from '../../../services/AdminService';
import '../../../assets/scss/modal.scss'
import  './edit-user.scss';

function EditUser({showModal, selectedUser, updateDb}) {

  
  const dispatch = useDispatch();
  const [selectedUserData, setSelectedUserData] = useState({});

  useEffect(() => {
    setSelectedUserData({...selectedUserData, ...selectedUser});
  }, [selectedUser])


  const cancelEdit = () => {
    showModal(false);
  }

  const confirmEdit = () => {
    // console.log(selectedUser);
    // console.log(selectedUserData);
    dispatch(setLoader(true));
    AdminService.editSelectedUSer(selectedUserData)
                .then((res) => {
                  // console.log((res.data));
                  showModal(false);
                  updateDb();
                  toast.success("Successfully edited! ");
                })
                .catch((err) => {
                  // console.log(err);
                  toast.success("Failed edited! ");
                })
                .finally(() => dispatch(setLoader(false)));
  }

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    selectedUserData[e.target.id]= e.target.value;
  }

  return (
    <>
    <Modal isOpen={true} ariaHideApp={false} style={ModalStyle}>
      <div className='modal-wrapper'>
        
        <div className='edit-user-admin'>
          {/* <h2>EDIT USER</h2>
          <h3>{selectedUser.username}</h3> */}
          <div className='edit-user-admin-data'>
            <label htmlFor="firstName">First Name</label>
              <input id="firstName" 
                      type ="text"
                      name="firstName" 
                      className='edit-user-admin-input'
                      defaultValue={selectedUser?.firstName}
                      onChange={(e) => {handleInputChange(e)}} />
          </div>

          <div className='edit-user-admin-data'>
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" 
                    type ="text" 
                    name="lastName" 
                    className='edit-user-admin-input'
                    defaultValue={selectedUser?.lastName}
                    onChange={(e) => {handleInputChange(e)}} />
          </div>

          <div className='edit-user-admin-data'>
            <label htmlFor="city">City</label>
            <input id="city" 
                    type ="text"
                    name="city"   
                    className='edit-user-admin-input'
                    defaultValue={selectedUser?.city}
                    onChange={(e) => {handleInputChange(e)}}/>
          </div>

          <div className='edit-user-admin-data'>
            <label htmlFor="username">Username</label>
            <input id="username" 
                    type ="text" 
                    name="username" 
                    className='edit-user-admin-input'
                    defaultValue={selectedUser?.username}
                    onChange={(e) => {handleInputChange(e)}} />
          </div>

          <div className='edit-user-admin-data'>
            <label htmlFor="email">E-mail</label>
            <input id="email" 
                    type ="email" 
                    name="email" 
                    className='edit-user-admin-input'
                    defaultValue={selectedUser?.email}
                    onChange={(e) => {handleInputChange(e)}} />
          </div>

          <div className='edit-user-admin-data'>
            <label htmlFor="isAdmin">Role</label>
            <select id="isAdmin" 
                    name="isAdmin" 
                    className='edit-user-admin-input'
                    defaultValue={selectedUser?.isAdmin}
                    onChange={(e) => {handleInputChange(e)}} >
              <option value='true' >admin</option>
              <option value='false' >user</option>
            </select>
          </div>

          <div className='edit-user-admin-data'>
            <label htmlFor="isActive">activity state</label>
            <select id="isActive" 
                    name="isActive" 
                    className='edit-user-admin-input'
                    defaultValue={selectedUser?.isActive}
                    onChange={(e) => {handleInputChange(e)}} >
              <option value='true' >activated</option>
              <option value='false' >not activated</option>
            </select>
          </div>

        </div>

        <div className='modal-footer'>
          <button className='modal-footer-btn' onClick={cancelEdit}> cancel </button>
          <button className='modal-footer-btn confirm-btn' onClick={confirmEdit}> confirm </button>
        </div>

      </div>
    </Modal>
    </>
  )
}

export default EditUser