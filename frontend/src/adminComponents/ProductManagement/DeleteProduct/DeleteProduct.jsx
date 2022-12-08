import React from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import ModalStyle from '../../../assets/ModalStyle';
import { setLoader } from '../../../redux/loaderSlice';
import AdminService from '../../../services/AdminService';

function DeleteProduct({showModal, selectedProduct, updateDb}) {
    const dispatch = useDispatch();

    const confirmDelete = () => {
        // console.log("confirm");
        dispatch(setLoader(true));
        AdminService.deleteSelectedProduct(selectedProduct._id)
                    .then((res) => {
                      // console.log(res);
                      showModal(false);
                      updateDb();
                      toast.success("product successfully deleted! ");
                    })
                    .catch((err) => {
                      console.log(err);
                      toast.error("Delete failed! ");
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
        selectedProduct && 
        <Modal isOpen={true} ariaHideApp={false} style={ModalStyle} >

        <div className='modal-wrapper'>
          <div className='modal-header'>
            <h2 className='modal-header-title' >Delete product</h2>
            <h3>{selectedProduct.title}</h3>
          </div>
        

          <div className='modal-footer'>
            <button className='modal-footer-btn' onClick={cancelDelete}> cancel </button>
            <button className='modal-footer-btn confirm-btn' onClick={confirmDelete}> confirm </button>
          </div>

         </div>

        </Modal>
        }
    </>
  )
}

export default DeleteProduct