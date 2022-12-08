import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import AuthService from '../../services/AuthService';
import {setLoader} from '../../redux/loaderSlice';

import './user-account.scss';
import MyModal from '../../components/MyModal/MyModal';
import { ToastContainer } from 'react-toastify';

function UserAccount() {

    const {user} = useSelector(state => state.userStore);
    const dispatch = useDispatch();

    const [userDetails, setUserDetails] = useState({});
    const [editUserModal, setEditUserModal] = useState(false);

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
        setEditUserModal(true);
        // setShowEdit(!showEdit);
    }

    const userDetailsLayout = () => {
        return(
            <div className='user-account-data' >

                <div className='user-account-data-details'>
                    <h4>username:</h4>
                    <h3 className="user-account-data-details-user" >{userDetails?.username}</h3>
                </div>
                <div className='user-account-data-details'>
                    <h4>email:</h4>
                    <h3 className="user-account-data-details-user" >{userDetails?.email}</h3>
                </div>
                <div className='user-account-data-details'>
                    <h4>First Name:</h4>
                    <h3 className="user-account-data-details-user " >{userDetails?.firstName}</h3>
                </div>
                <div className='user-account-data-details'>
                    <h4>Last Name:</h4>
                    <h3 className="user-account-data-details-user" >{userDetails?.lastName}</h3>
                </div>
                <div className='user-account-data-details'>
                    <h4>City:</h4>
                    <h3 className="user-account-data-details-user" >{userDetails?.city}</h3>
                </div>
                <div className='user-account-data-details'>
                    <h4>address:</h4>
                    <h3 className="user-account-data-details-user" >{userDetails?.address}</h3>
                </div>
                <div className='user-account-data-details'>
                    <h4>Phone Number:</h4>
                    <h3 className="user-account-data-details-user" >{userDetails?.phoneNumber}</h3>
                </div>
                <ToastContainer theme="dark" />
                
            </div>
        )
    }



  return (
    <>
        <Header pageTitle="Account" />
        <div className='user-account-wrapper'>
            {
                userDetails &&
                userDetailsLayout()
            }
            <button className='user-account-edit-btn' onClick={e => editUser(user)} >
                EDIT
            </button>
        </div>
        {
            editUserModal && <MyModal showModal={setEditUserModal} selectedUser={userDetails} updateDb={getUserDetails} />
        }

    </>
  )
}

export default UserAccount