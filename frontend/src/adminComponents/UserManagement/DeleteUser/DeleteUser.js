import React, { useEffect } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import ModalStyle from '../../../assets/ModalStyle';
import { setLoader } from '../../../redux/loaderSlice';
import AdminService from '../../../services/AdminService';
import './delete-user.scss';

function DeleteUser({showModal, selectedUser, updateDb}) {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(selectedUser);
  // },[])

  const confirmDelete = () => {
    // console.log("confirm");
    dispatch(setLoader(true));
    AdminService.deleteSelectedUser(selectedUser._id)
                .then((res) => {
                  // console.log(res);
                  showModal(false);
                  updateDb();
                  toast.success("Successfully deleted! ");
                })
                .catch((err) => {
                  console.log(err);
                  toast.error("Failed! ");
                })
                .finally(() => {
                  dispatch(setLoader(false));
                })
  }

  const cancelDelete = () => {
    showModal(false);
    // console.log("cancel");
  }

  return (
    <>
      {
        selectedUser && 
        <Modal isOpen={true} ariaHideApp={false} style={ModalStyle} >
          <h2> DELETE </h2>
          <h3>{selectedUser.username}</h3>
          <button onClick={confirmDelete}> confirm </button>
          <button onClick={cancelDelete}> cancel </button>
        </Modal>
      }
    </>
  )
}

export default DeleteUser