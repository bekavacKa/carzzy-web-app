import React from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import ModalStyle from '../../assets/ModalStyle';
import { setLoader } from '../../redux/loaderSlice';
import AuthService from '../../services/AuthService';
import './my-modal.scss';

// TODO NAPRAVIT MOJ PRAVI MODAL KAD STIGNEM

function MyModal({showModal, selectedUser, updateDb}) {

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        selectedUser[e.target.id]= e.target.value;
    }
    const cancelEdit = () => {
        showModal(false);
      }
    
      const confirmEdit = () => {
        // console.log(selectedUser);
        // console.log(selectedUserData);
        dispatch(setLoader(true));
        AuthService.editOwnData(selectedUser)
                    .then((res) => {
                      // console.log((res.data));
                      if(res.status === 204){
                          showModal(false);
                          updateDb();
                          toast.success("Successfully edited! ");
                      }
                    })
                    .catch((err) => {
                      console.log(err);
                      toast.warning("Failed edited! ");
                      showModal(false);

                    })
                    .finally(() => dispatch(setLoader(false)));
      }
  return (
    <>
        <Modal isOpen={true} ariaHideApp={false} style={ModalStyle}>
            <div className='modal-wrapper'>

                <div className='modal-header'>
                    <h2 className='modal-header-title' >Edit</h2>
                </div>
                
                <div className='edit-user-admin'>

                    <div className='edit-user-admin-data-locked'>
                        <p className='edit-user-admin-data-locked-info'>Username</p>
                        <p className='edit-user-admin-data-locked-name'>
                            {selectedUser?.username}
                        </p>
                    </div>

                    <div className='edit-user-admin-data-locked'>
                        <p className='edit-user-admin-data-locked-info'>E-mail</p>
                        <p className='edit-user-admin-data-locked-name'>
                            {selectedUser?.email}
                        </p>
                    </div>

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
                    <label htmlFor="address">Address</label>
                    <input id="address" 
                            type ="text"
                            name="address"   
                            className='edit-user-admin-input'
                            defaultValue={selectedUser?.address}
                            onChange={(e) => {handleInputChange(e)}}/>
                    </div>

                    <div className='edit-user-admin-data'>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input id="phoneNumber" 
                            type ="number"
                            name="phoneNumber"   
                            className='edit-user-admin-input'
                            defaultValue={selectedUser?.phoneNumber}
                            onChange={(e) => {handleInputChange(e)}}/>
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

export default MyModal