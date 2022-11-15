import React, { useEffect, useState } from 'react'
import './shop.scss';
import ShopService from '../../services/ShopService';
import ProductSingle from '../../components/ProductSingle/ProductSingle';
import Header from '../../components/Header/Header';
import SearchFilter from '../../components/SearchFilter/SearchFilter';
import { useDispatch } from 'react-redux';
import { setLoader } from '../../redux/loaderSlice';
import { useLocation, useSearchParams } from 'react-router-dom';
// import ProductSingle from '../../components/ProductSingle/ProductSingle';

function Shop(props) {

    const location = useLocation();
    // const { from } = props.location.state;
    // const catName = location.state?.catName;
    // ? iako radi mogo bi odradit refaktornig za filter/search/sort jer moze jednostavnije

    const [allProducts, setAllProducts] = useState([]);
    const [filterPrice, setFilterPrice] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [sort, setSort] = useState("");
    const [checkedCategory, setCheckedCategory] = useState("");
    let sortedProducts;
    // let filteredProducts;
    let searchedProducts;
    
    const [query, setQuery] = useSearchParams();
    const dispatch = useDispatch();
    
    // ? na mozilli mi radi a na chromu nece moram provjerit zasto
    useEffect(() => {
        location.state?.catName ? 
        setCheckedCategory(location.state?.catName) && getProductsWithCategory(location.state?.catName) 
        :
        getAllProducts();
    }, []);

    useEffect(() => {
        checkedCategory && getProductsWithCategory(checkedCategory);
    },[checkedCategory]);

    const getProductsWithCategory = (name) => {
        dispatch(setLoader(true));
        let nameLower = name.toLowerCase();
        ShopService.getProductsWithSpecificCategory(nameLower)
                    .then(res => {
                        if(res.status === 200){
                            setAllProducts(res.data);
                        }
                    })
                    .catch(err => console.log(err))
                    .finally(() => dispatch(setLoader(false)));
    }

    const getAllProducts = () => {
        dispatch(setLoader(true));
        ShopService.getProducts()
                    .then(res => {
                        // console.log("all data =>", res);
                        if(res.status === 200){
                            setAllProducts(res.data.reverse());
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
                    .finally(() => dispatch(setLoader(false)))
    }

    // Search
    useEffect(() => {
        if (searchTerm.length > 2) {
            dispatch(setLoader(true));
            setQuery({"search": searchTerm});
            searchProducts()
        } else if (!searchTerm) {
            dispatch(setLoader(true));
            setQuery({});
            getAllProducts();
        }
    }, [searchTerm]);

    // ? napravit da mi puni state iz guery-a, da ga ne gubim na refresh
    // useEffect(() => {
    //     let queryParam = query.get('search');
    //     queryParam && setSearchTerm(queryParam);
    // }, []);


    const searchProducts = () => {
        ShopService.getSearchedProducts(searchTerm)
                    .then(res => {
                        if (res.status === 200) {
                            searchedProducts = res.data;
                        }
                        setAllProducts(searchedProducts);
                    })
                    .catch(err => console.log(err))
                    .finally(() => dispatch(setLoader(false)))
    }

    // SORT
    // ? mozda bolje napravit call backendu pa da tamo odradim sort 
    useEffect(() => {
        if (sort === "low") {
            sortedProducts = [...allProducts];
            sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
            setAllProducts(sortedProducts)

        } else if (sort === "high") {
            sortedProducts = [...allProducts];
            sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
            setAllProducts(sortedProducts)

        } else if (sort === "latest") {
            getAllProducts();
        }
    }, [sort]);

    // FILTER
    // TODO VRACA MI BACKEND PRAZAN ARRAY moram popravit
    // useEffect(() => {
    //     if (filterPrice !=='' && filterPrice!=='0') {
    //         ShopService.getFilteredProducts(filterPrice)
    //             .then(res => {
    //                 console.log("filterr", res.data);
    //                 if ( res.data && res.status === 200) {
    //                     filteredProducts = res.data;
    //                 }
    //                 setAllProducts(filteredProducts);
    //             })
    //             .catch(err => console.log(err))
    //     }else{
    //         // console.log("u elsu ");
    //         getAllProducts();
    //     }
    // }, [filterPrice]);





  return (
    <>
        <Header pageTitle={"shop"} />
        <div className='shop-wrapper'>
            <SearchFilter setSort={setSort} filterPrice={filterPrice} setFilterPrice={setFilterPrice} setSearchTerm={setSearchTerm} setCheckedCategory={setCheckedCategory}/>
            <div className='shop-cards-holder' >
                {
                    allProducts.map((product) => {
                        return (
                            <ProductSingle productProps={product} cardInfo={true} key={product._id} />
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Shop