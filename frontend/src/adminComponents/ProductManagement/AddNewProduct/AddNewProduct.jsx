import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import ModalStyle from '../../../assets/ModalStyle';
import { setLoader } from '../../../redux/loaderSlice';
import AdminService from '../../../services/AdminService';
import './add-new-product.scss';

function AddNewProduct({showModal,  updateDb}) {
  const dispatch = useDispatch();
  const productCategory = ['rims', 'tires', 'exhaust', 'other' ];
  let rand = Math.random()*(5-1)+1
  const [newProduct, setNewProduct]=useState({
		title: "",
    category: productCategory[0],
    description: "",
    price: "",
    // imageUrl: "",
		rating: rand.toFixed(1),
	});
  const [imgFile, setImgFile] = useState(null);

  // const [isValid, setIsValid] = useState(true);
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    // console.log(newProduct);
  },[newProduct])


  const handleInputChange = (e) => {
    // console.log(e.target.value);
    let copyNewProduct = {...newProduct};
    copyNewProduct[e.target.name] = e.target.value;
    setNewProduct(copyNewProduct);
  }

  const handleImgFile = (e) => {
    // console.log(e.target.files[0]);
    setImgFile(e.target.files[0]);
  }
  // TODO validaciju za sliku sam obriso dok ne rijesim upload

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    if(!newProduct.title || !newProduct.description || !newProduct.price || !imgFile){
      // console.log("Nesto fali");
      return;
    }
    // if(!newProduct.imageUrl.includes('https://')){
    //   // console.log('nema');
    //   newProduct.imageUrl = 'https://content.myconnectsuite.com/api/documents/30b67cc6055e4da88c40802e6ed33bc4.jpeg';
    // }
    addingNewProduct();
    showModal(false);
  }

  const addingNewProduct = () => {
    let newProductData = new FormData();
    newProductData.append("product", JSON.stringify(newProduct));
    newProductData.append("file", imgFile);
    
    // console.log(newProductData.get("file"));
    
    dispatch(setLoader(true));
    AdminService.addNewProduct(newProductData)
                .then(res => {
                  // console.log(res.data);
                  showModal(false);
                  updateDb();
                  toast.success("product successfully added! ");
                })
                .catch(err => {
                  toast.error("ERORR");
                  console.log(err)
                })
                .finally(() => dispatch(setLoader(false)));
    // console.log("PROSA");
  }
  
  const cancelAdd = () => {
    showModal(false);
  }

  const requiredMsgLayout = (formProperty) => {
    return isSubmit && !formProperty ? ' required animate__animated animate__shakeX' : '';
  }

  
  return (
    <>


    <Modal isOpen={true} ariaHideApp={false} style={ModalStyle} >

      <div className='modal-wrapper'>

        <div className='modal-header'>
          <h2 className='modal-header-title' >Add new product</h2>
        </div>

        <div className='product-manage-wrapper'>
            <div className='product-manage-add'>
              
              <label htmlFor='title' className={`product-manage-add-fields ${requiredMsgLayout(newProduct?.title)}`} >Title</label>
              <input className='product-manage-add-fields-inputs' type="text" id='title'  name='title' onChange={(e) => {handleInputChange(e)}}/>

              <label htmlFor='description' className={`product-manage-add-fields ${requiredMsgLayout(newProduct?.description)}`}>Description</label>
              <textarea className='product-manage-add-fields-inputs' id="description" name="description" rows="4" cols="50" onChange={(e) => {handleInputChange(e)}} />

              <label htmlFor='category' className={`product-manage-add-fields ${requiredMsgLayout(newProduct?.category)}`}>Category</label>
              <select className='product-manage-add-fields-inputs' id='category' name='category' onChange={(e) => {handleInputChange(e)}} >
                {
                  productCategory.map((cat, index) => {
                    return(
                      <option value={cat} key={index} > {cat}</option>
                    )
                  })
                }
              </select>

              <label htmlFor='price' className={`product-manage-add-fields ${requiredMsgLayout(newProduct?.price)}`}>Price USD $</label>
              <input className='product-manage-add-fields-inputs' type="number" id='price' name='price' onChange={(e) => {handleInputChange(e)}} />

              {/* <label htmlFor='imageUrl' className={`product-manage-add-fields ${requiredMsgLayout(newProduct?.imageUrl)}`}>Image URL</label>
              <input className='product-manage-add-fields-inputs' type="text" id='imageUrl' name='imageUrl' onChange={(e) => {handleInputChange(e)}} /> */}


              <label htmlFor='imageFile' className={`product-manage-add-fields ${requiredMsgLayout(imgFile)}`}>Image File</label>
              <input className='product-manage-add-fields-inputs' type="file" id='imageFile' name='imageFile' onChange={(e) => {handleImgFile(e)}} />

            </div>
        </div>

        <div className='modal-footer'>
          <button className='modal-footer-btn' onClick={cancelAdd}> cancel </button>
          <button className='modal-footer-btn confirm-btn' onClick={handleSubmitForm}  > confirm </button>
        </div>

      </div>

    </Modal>


        
    </>
  )
}

export default AddNewProduct