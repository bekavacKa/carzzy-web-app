import React, { useEffect, useState } from 'react'
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setLoader } from '../../../redux/loaderSlice';
import ShopService from '../../../services/ShopService';
import AddNewProduct from '../AddNewProduct/AddNewProduct';
import DeleteProduct from '../DeleteProduct/DeleteProduct';
import EditProduct from '../EditProduct/EditProduct';
import './all-products.scss';

import { BACKEND_URL_CONFIG } from '../../../config/backendUrlConfig';

function AllProducts() {
  
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  const [addProductModal, setAddProductModal] = useState(false);
  const [deleteProductModal, setDeleteProductModal] = useState(false);
  const [editProductModal, setEditProductModal] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState({});


  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    dispatch(setLoader(true));
    ShopService.getProducts()
                .then((res) => {
                  // console.log(res.data);
                  setProducts(res.data);
                })
                .catch((err) => {
                  console.log(err);
                })
                .finally(() => dispatch(setLoader(false)));
  };

  const deleteProduct = (product) => {
    setDeleteProductModal(true);
    setSelectedProduct(product);
  }

  const editProduct = (product) => {
    setEditProductModal(true);
    setSelectedProduct(product);
  }

  const addProduct = () => {
    setAddProductModal(true);
  }

  const productsLayout = () => {
    return products.map((product, index) => {
      return (
        <tr key={index}>
          <th scope="row">{index + 1}.</th>
          <td>
            <img src={`${BACKEND_URL_CONFIG.PRODUCT_IMAGE_PATH.url}${product.imageFile}`} alt={product.title} />
          </td>
          <td>{product.title}</td>
          <td>{product.category}</td>
          <td>{product.rating}</td>
          <td>{product.price}</td>
          <td>{product.isVisible ? "enabled" : "disabled"}</td>
          <td className='all-products-btns'>
            <FaRegEdit className='all-products-edit' onClick={e => editProduct(product)} title='EDIT'/>
            <FaTrashAlt className='all-products-delete' title='DELETE' onClick={e => deleteProduct(product)} />
          </td>
        </tr>
      )
    })
  }

  return (
    <div className='all-products-wrapper' >
      {
        products?.length && 
        <table className="all-products-table">
        <thead>
          <tr>
            <th scope="col">NO.</th>
            <th scope="col">image</th>
            <th scope="col">title</th>
            <th scope="col">category</th>
            <th scope="col">rating</th>
            <th scope="col">price</th>
            <th scope="col">visibility</th>
            <th>
              <button className='all-products-table-add-btn animate__animated animate__rubberBand' onClick={e => addProduct()}> ADD NEW </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {productsLayout()}
        </tbody>
      </table>
      }
      {
        deleteProductModal && <DeleteProduct showModal={setDeleteProductModal} selectedProduct={selectedProduct} updateDb={getAllProducts} />
      }
      {
        addProductModal && <AddNewProduct showModal={setAddProductModal}  updateDb={getAllProducts}/>
      }
      {
        editProductModal && <EditProduct showModal={setEditProductModal} selectedProduct={selectedProduct} updateDb={getAllProducts}  />
      }
    </div>
  )
}

export default AllProducts