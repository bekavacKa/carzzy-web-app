import React, { useEffect, useState } from 'react'
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import ShopService from '../../services/ShopService';
import './all-products.scss';

function AllProducts() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    ShopService.getProducts()
              .then((res) => {
                // console.log(res);
                setProducts(res.data);
              })
              .catch((err) => {
                console.log(err);
              })
  }, []);

  const productsLayout = () => {
    return products.map((product, index) => {
      return (
        <tr key={index}>
          <th scope="row">{index + 1}.</th>
          <td>
            <img src={product.imageUrl} alt={product.title} />
          </td>
          <td>{product.title}</td>
          <td>{product.category}</td>
          <td>{product.rating}</td>
          <td>{product.price}</td>
          <td className='all-products-btns'>
            <FaRegEdit className='all-products-edit' title='EDIT'/>
            <FaTrashAlt className='all-products-delete' title='DELETE' />
          </td>
        </tr>
      )
    })
  }

  return (
    <div className='all-products-wrapper' >
      <h2>AllProducts</h2>
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
          </tr>
        </thead>
        <tbody>
          {productsLayout()}
        </tbody>
      </table>
      }
    </div>
  )
}

export default AllProducts