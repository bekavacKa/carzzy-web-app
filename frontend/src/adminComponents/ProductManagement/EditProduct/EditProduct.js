import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import ModalStyle from '../../../assets/ModalStyle'
import '../../../assets/scss/modal.scss'
import { setLoader } from '../../../redux/loaderSlice';
import AdminService from '../../../services/AdminService';
import './edit-product.scss';


function EditProduct({showModal, selectedProduct, updateDb}) {
    const dispatch = useDispatch();
    const [selectedProductData, setSelectedProductData] = useState({});

    useEffect(() => {
        setSelectedProductData({...selectedProductData, ...selectedProduct})
    },[selectedProduct]);

    const cancelEdit = () => {
        showModal(false);
    }
    
    const confirmEdit = () => {
    dispatch(setLoader(true));
    AdminService.editSelectedProduct(selectedProductData)
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
    selectedProductData[e.target.id]= e.target.value;
    }

  return (
    <>
      <Modal isOpen={true} ariaHideApp={false} style={ModalStyle}>
        <div className='modal-wrapper'>

          <div className='modal-header'>
            <h2 className='modal-header-title' >Edit Product</h2>
            <h3>{selectedProduct.title}</h3>
          </div>
          
          <div className='edit-product-admin'>
            <div className='edit-product-admin-data'>
              <label htmlFor="title">Name</label>
                <input id="title" 
                        type ="text"
                        name="title" 
                        className='edit-product-admin-input'
                        defaultValue={selectedProduct?.title}
                        onChange={(e) => {handleInputChange(e)}} />
            </div>
          </div>

          <div className='edit-product-admin'>
            <div className='edit-product-admin-data'>
              <label htmlFor="description">Description</label>
                <textarea  rows="6" cols="50"
                        id="description" 
                        name="description" 
                        className='edit-product-admin-input'
                        defaultValue={selectedProduct?.description}
                        onChange={(e) => {handleInputChange(e)}} />
            </div>
          </div>

          <div className='edit-product-admin'>
            <div className='edit-product-admin-data'>
              <label htmlFor="price">price</label>
                <input id="price" 
                        type ="number"
                        name="price" 
                        className='edit-product-admin-input'
                        defaultValue={selectedProduct?.price}
                        onChange={(e) => {handleInputChange(e)}} />
            </div>
          </div>

          <div className='edit-product-admin'>
            <div className='edit-product-admin-data'>
              <label htmlFor="imageUrl">image url</label>
                <input id="imageUrl" 
                        type ="text"
                        name="imageUrl" 
                        className='edit-product-admin-input'
                        defaultValue={selectedProduct?.imageUrl}
                        onChange={(e) => {handleInputChange(e)}} />
            </div>
          </div>

          <div className='edit-product-admin'>
            <div className='edit-product-admin-data'>
              <label htmlFor="category">category</label>
              <select id="category" 
                      name="category" 
                      className='edit-product-admin-input'
                      defaultValue={selectedProduct?.category}
                      onChange={(e) => {handleInputChange(e)}} >
                <option value='other'>other</option>
                <option value='exhaust'>exhaust</option>
                <option value='tires'>tires</option>
                <option value='rims'>rims</option>
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

export default EditProduct