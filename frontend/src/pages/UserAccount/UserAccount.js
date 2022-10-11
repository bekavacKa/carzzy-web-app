import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import AuthService from '../../services/AuthService';
import {setLoader} from '../../redux/loaderSlice';

function UserAccount() {

    const {user} = useSelector(state => state.userStore);
    const dispatch = useDispatch();

    const [userDetails, setUserDetails] = useState({})

    const getUserDetails = () => {
        dispatch(setLoader(true))
        AuthService.getMyData(user?._id)
                    .then((res) => {
                        console.log(res.data);
                        setUserDetails(res.data);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                    .finally(() => {
                        dispatch(setLoader(false));
                    })
    }

    const userDetailsLayout = () => {
        return(
            <div>
                <p>{userDetails?.firstName}</p>
                <p>{userDetails?.lastName}</p>
                <p>{userDetails?.email}</p>
            </div>
        )
    }

  return (
    <div>
        <Header pageTitle="Your Account" />
        {
            userDetails &&
            userDetailsLayout()
        }
        <button onClick={getUserDetails}>GET ACC DETAILS</button>
    </div>
  )
}

export default UserAccount