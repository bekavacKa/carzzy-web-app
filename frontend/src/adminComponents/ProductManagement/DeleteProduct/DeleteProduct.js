import React from 'react'
import ReactModal from 'react-modal';
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
        <ReactModal isOpen={true} ariaHideApp={false} style={ModalStyle} >
            <h2> DELETE </h2>
            <h3>{selectedProduct.title}</h3>
            <button onClick={confirmDelete}> confirm </button>
            <button onClick={cancelDelete}> cancel </button>
        </ReactModal>
        }
    </>
  )
}

export default DeleteProduct