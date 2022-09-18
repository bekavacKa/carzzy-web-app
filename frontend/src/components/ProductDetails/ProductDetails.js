import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ShopService from '../../services/ShopService';

function ProductDetails() {
    const [product, setProduct] = useState({});
    const [isHaveParams, setIsHaveParams] = useState(true);
    const [isApiFinished, setIsApiFinished] = useState(false);

    const params = useParams();

    useEffect(()=> {
        console.log(params);
        if(params.productId){
            ShopService.getSingleProduct(params.productId)
                        .then((res)=>{
                            if(res.status === 200){
                                setProduct(res.data);
                            }if(!res.data){
                                setIsHaveParams(false);
                            }
                        })
                        .catch((err)=>{
                            console.log("EROOR DETAILS", err);
                            setIsHaveParams(false);
                        })
                        .finally(()=>{
                            setIsApiFinished(true);
                        })
        }else{
            setIsHaveParams(false);
        }
    },[params]);

    const noParamsMsgLayout = () => {
        return(
            !isHaveParams ?
            <p>NO product ID</p> :
            null
        )
    };

    const productLayout = () => {
        return (
            isApiFinished &&
            <div>
                <img src={product.imageUrl} alt={product.title} />
                <h2>{product.title}</h2>
                <h2>{product.description}</h2>
                <h2>{product.price}</h2>
                <h2>{product.rating}</h2>
            </div>
        )
    }

  return (
    <div className='product-details-wrapper'>
        {/* <h2>ProductDetails</h2> */}
        {noParamsMsgLayout()}
        {
            product.hasOwnProperty('_id') && productLayout()
        }
    </div>
  )
}

export default ProductDetails