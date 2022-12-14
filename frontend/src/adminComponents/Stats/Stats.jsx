import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setLoader } from '../../redux/loaderSlice';
import AdminService from '../../services/AdminService';
import AuthService from '../../services/AuthService';
import BlogService from '../../services/BlogService';
import ShopService from '../../services/ShopService';
import './stats.scss';
import StatsBox from './StatsBox';

function Stats() {

  const dispatch = useDispatch();
  const [products, setProducts] = useState(0);
  const [users, setUsers] = useState(0);
  const [subs, setSubs] = useState(0);
  const [blogs, setBlogs] = useState(0);
  const [impressions, setImpressions] = useState(0);
  const [sponsors, setSponsors] = useState(0);
  const [productCategories, setProductCategories] = useState(0);
  const [banners, setBanners] = useState(0);

  // TODO refactoring required (make one call to the backend that will fetch all the statistics from once)

  useEffect(() => {
    getProductsFromService();
    getUsersFromService();
    getSubscriptionsFromService();
    getAllBlogs();
    getAllImpressions();
    getAllSponsors();
    getAllProductCategories();
    getAllBanners();
  }, []);

  const getProductsFromService = () => {
    dispatch(setLoader(true))
    AdminService.getAllDbProducts()
                .then((res) => {
                  // console.log(res);
                  setProducts(res.data.length);
                })
                .catch((err) => {
                  console.log(err);
                })
                .finally(() => dispatch(setLoader(false)));
  }

  const getUsersFromService = () => {
    dispatch(setLoader(true))
    AuthService.getAllUsers()
                .then((res) => {
                  // console.log(res);
                  setUsers(res.data.length);
                })
                .catch((err) => {
                  console.log(err);
                })
                .finally(() => dispatch(setLoader(false)));
  }

  const getSubscriptionsFromService = () => {
    dispatch(setLoader(true))
    AuthService.getAllSubscriptions()
                .then((res) => {
                  setSubs(res.data.length);
                })
                .catch((err) => {
                  console.log(err);
                })
                .finally(() => dispatch(setLoader(false)));
  }

  const getAllBlogs = () => {
    dispatch(setLoader(true))
    BlogService.getBlogs()
                .then((res) => {
                  setBlogs(res.data.length);
                })
                .catch((err) => {
                  console.log(err);
                })
                .finally(() => dispatch(setLoader(false)));
  }

  const getAllImpressions = () => {
    dispatch(setLoader(true))
    AuthService.getImpressions()
                .then((res) => {
                  setImpressions(res.data.length);
                })
                .catch((err) => {
                  console.log(err);
                })
                .finally(() => dispatch(setLoader(false)));
  }

  const getAllSponsors = () => {
    dispatch(setLoader(true))
    ShopService.getSponsors()
                .then((res) => {
                  setSponsors(res.data.length);
                })
                .catch((err) => {
                  console.log(err);
                })
                .finally(() => dispatch(setLoader(false)));
  }

  const getAllProductCategories = () => {
    dispatch(setLoader(true))
    ShopService.getCategories()
                .then((res) => {
                  setProductCategories(res.data.length);
                })
                .catch((err) => {
                  console.log(err);
                })
                .finally(() => dispatch(setLoader(false)));
  }
  const getAllBanners = () => {
    dispatch(setLoader(true))
    ShopService.getBanners()
                .then((res) => {
                  setBanners(res.data.length);
                })
                .catch((err) => {
                  console.log(err);
                })
                .finally(() => dispatch(setLoader(false)));
  }


  return (
    <div className='stats-wrapper' >
      <StatsBox number={products} title="PRODUCTS" />
      <StatsBox number={users} title="USers"/>
      <StatsBox number={subs} title="Subscriptions" />
      <StatsBox number={blogs} title="Blogs" />
      <StatsBox number={impressions} title="impressions" />
      <StatsBox number={sponsors} title="sponsors" />
      <StatsBox number={productCategories} title="product Categories" />
      <StatsBox number={banners} title="banners" />
    </div>
  )
}

export default Stats