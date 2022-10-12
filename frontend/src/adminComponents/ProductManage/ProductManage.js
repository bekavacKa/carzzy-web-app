import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { setLoader } from '../../redux/loaderSlice';
import ShopService from '../../services/ShopService';
import './product-manage.scss';

function ProductManage() {
  const dispatch = useDispatch();
  const productCategory = ['rims', 'tires', 'exhaust', 'other' ];
  let rand = Math.random()*(5-1)+1
  const [newProduct, setNewProduct]=useState({
		title: "",
    category: productCategory[0],
    description: "",
    price: "",
    imageUrl: "",
		rating: rand.toFixed(2),
	});

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
  
  const handleSubmitForm = (e) => {
    e.preventDefault()
    if(!newProduct.title || !newProduct.description || !newProduct.price || !newProduct.imageUrl){
      // console.log("Nesto fali");
      return;
    }
    dispatch(setLoader(true));
    ShopService.addNewProduct(newProduct)
                .then(res => {
                  toast.success("successfully");
                  // console.log(res.data);
                })
                .catch(err => {
                  toast.error("ERORR");
                  console.log(err)
                })
                .finally(() => dispatch(setLoader(false)));
    // console.log("PROSA");
  }

  const requiredMsgLayout = (formProperty) => {
    return isSubmit && !formProperty ? ' required animate__animated animate__shakeX' : '';
  }
  
  return (
    <>
        <div className='product-manage-wrapper'>
          <h3>ADD NEW PRODUCT</h3>
            <form className='product-manage-add' onSubmit={handleSubmitForm}>
              
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
              <input className='product-manage-add-fields-inputs' type="text" id='price' name='price' onChange={(e) => {handleInputChange(e)}} />

              <label htmlFor='imageUrl' className={`product-manage-add-fields ${requiredMsgLayout(newProduct?.imageUrl)}`}>Image URL</label>
              <input className='product-manage-add-fields-inputs' type="text" id='imageUrl' name='imageUrl' onChange={(e) => {handleInputChange(e)}} />

              <button className='product-manage-add-btn' onClick={e => setIsSubmit(true)} >ADD PRODUCT</button>

            </form>
        </div>
    </>
  )
}

export default ProductManage