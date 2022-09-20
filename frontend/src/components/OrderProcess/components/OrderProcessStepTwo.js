import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../scss/order-process-step-two.scss';

function OrderProcessStepTwo() {

    const {user} = useSelector(state => state.userStore);

    useEffect(() => {
        console.log("user => ", user);
    }, [user])
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit>");
    }

  return (
    <div className='order-process-step-two-wrapper' >
        <h2>order-process-step-two</h2>
        
        <form onSubmit={(e) => handleSubmit(e)}>

            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="form-control" id="firstName" defaultValue={user?.firstName} />
            </div>

            <div className="form-group">
                <label htmlFor="lastName">last Name</label>
                <input type="text" className="form-control" id="lastName" defaultValue={user?.lastName} />
            </div>

            <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" className="form-control" id="city" defaultValue={user?.city} />
            </div>

            <div className="form-group">
                <label htmlFor="address">address</label>
                <input type="text" className="form-control" id="address" defaultValue={user?.address} />
            </div>

            <div className="form-group">
                <label htmlFor="postCode">PostCode</label>
                <input type="text" className="form-control" id="postCode" defaultValue={user?.postCode} />
            </div>

            <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" className="form-control" id="phoneNumber" defaultValue={user?.phoneNumber} />
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" defaultValue={user?.email} />
            </div>



            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="terms" />
                <label className="form-check-label" htmlFor="terms">Accept terms</label>
            </div>

            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="conditions" />
                <label className="form-check-label" htmlFor="conditions">Accept conditions</label>
            </div>

        </form>

        

    </div>
  )
}

export default OrderProcessStepTwo