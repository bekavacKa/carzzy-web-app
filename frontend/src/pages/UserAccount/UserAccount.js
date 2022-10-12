import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import AuthService from '../../services/AuthService';
import {setLoader} from '../../redux/loaderSlice';

import './user-account.scss';

function UserAccount() {

    const {user} = useSelector(state => state.userStore);
    const dispatch = useDispatch();

    const [userDetails, setUserDetails] = useState({})
    const [showEdit, setShowEdit] = useState(false);

    useEffect(() => {
        getUserDetails();
    },[])

    const getUserDetails = () => {
        dispatch(setLoader(true))
        AuthService.getMyData(user?._id)
                    .then((res) => {
                        // console.log(res.data);
                        setUserDetails(res.data);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                    .finally(() => {
                        dispatch(setLoader(false));
                    })
    }

    const editUser = () => {
        setShowEdit(!showEdit);
    }

    const userDetailsLayout = () => {
        return(
            <div className='user-account-data' >
                <div className='user-account-data-details'>
                    <p>First Name:</p>
                    {
                        !showEdit ? 
                        <p className="user-account-data-details-user " >{userDetails?.firstName}</p>
                        :
                        <input type='text'
                                defaultValue={userDetails?.firstName}
                                className="user-account-data-details-user input"
                                />
                    }
                </div>
                <div className='user-account-data-details'>
                    <p>Last Name:</p>
                    {
                        !showEdit ?
                        <p className="user-account-data-details-user" >{userDetails?.lastName}</p>
                        :
                        <input type='text'
                                defaultValue={userDetails?.lastName}
                                className="user-account-data-details-user input"
                                />
                    }
                </div>
                <div className='user-account-data-details'>
                    <p>email:</p>
                    {
                        !showEdit ?
                        <p className="user-account-data-details-user" >{userDetails?.email}</p>
                        :
                        <input type='email'
                                defaultValue={userDetails?.email}
                                className="user-account-data-details-user input"
                                />
                    }
                </div>
                <div className='user-account-data-details'>
                    <p>username:</p>
                    {
                        !showEdit ?
                        <p className="user-account-data-details-user" >{userDetails?.username}</p>
                        :
                        <input type='text'
                                defaultValue={userDetails?.username}
                                className="user-account-data-details-user input"
                                />
                    }
                </div>
                
            </div>
        )
    }



  return (
    <>
        <Header pageTitle="Your Account" />
        <div className='user-account-wrapper'>
            {
                userDetails &&
                userDetailsLayout()
            }
            <button className='user-account-edit-btn' onClick={editUser} >
                {
                    showEdit ? "SAVE" : "EDIT"
                }
            </button>
        </div>
    </>
  )
}

export default UserAccount