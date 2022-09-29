import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStepTwoForm } from "../../../redux/orderProcessSlice";
import "../scss/order-process-step-two.scss";

function OrderProcessStepTwo() {
  const { user } = useSelector((state) => state.userStore);
  const { form, isSubmit } = useSelector(
    (state) => state.orderProcessStore.orderProcess.stepTwo
  );

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("user => ", user);
    // console.log("form =>", form);
    dispatch(updateStepTwoForm({ ...form, ...user }));
  }, []);

//   useEffect(() => {
    
//   }, [isSubmit])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit >");
  };

  const handleFormOnChange = (e) => {
    // console.log("form =>>> ", form);
    let newForm = {...form};
    newForm[e.target.id] = e.target.value;
    // console.log("kopija", newForm);
    dispatch(updateStepTwoForm(newForm));
  }

  const requiredMsgLayout = (formProperty) => {
    return isSubmit && !formProperty ? ' required-field animate__animated animate__shakeX' : '';
  }

  return (
    <>
    {
        form &&
        <div className="order-process-step-two-wrapper">
        <h2>STEP TWO</h2>

        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="order-two-input">
            <label htmlFor="firstName">First Name</label>
            <input
                type="text"
                className={`order-two-input-filed ${requiredMsgLayout(form?.firstName)} `}
                id="firstName"
                defaultValue={form?.firstName}
                onInput={e => handleFormOnChange(e)}
            />
            </div>

            <div className="order-two-input">
            <label htmlFor="lastName">Last Name</label>
            <input
                type="text"
                className={`order-two-input-filed ${requiredMsgLayout(form?.lastName)} `}
                id="lastName"
                defaultValue={form?.lastName}
                onInput={e => handleFormOnChange(e)}
            />
            </div>

            <div className="order-two-input">
            <label htmlFor="city">City</label>
            <input
                type="text"
                className={`order-two-input-filed ${requiredMsgLayout(form?.city)} `}
                id="city"
                defaultValue={form?.city}
                onInput={e => handleFormOnChange(e)}
            />
            </div>

            <div className="order-two-input">
            <label htmlFor="address">address</label>
            <input
                type="text"
                className={`order-two-input-filed ${requiredMsgLayout(form?.address)} `}
                id="address"
                defaultValue={form?.address}
                onInput={e => handleFormOnChange(e)}
            />
            </div>

            <div className="order-two-input">
            <label htmlFor="postCode">PostCode</label>
            <input
                type="text"
                className={`order-two-input-filed ${requiredMsgLayout(form?.postCode)} `}
                id="postCode"
                defaultValue={form?.postCode}
                onInput={e => handleFormOnChange(e)}
            />
            </div>

            <div className="order-two-input">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
                type="text"
                className={`order-two-input-filed ${requiredMsgLayout(form?.phoneNumber)} `}
                id="phoneNumber"
                defaultValue={form?.phoneNumber}
                onInput={e => handleFormOnChange(e)}
            />
            </div>

            <div className="order-two-input">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
                type="email"
                className={`order-two-input-filed ${requiredMsgLayout(form?.email)} `}
                id="email"
                defaultValue={form?.email}
                onInput={e => handleFormOnChange(e)}
            />
            </div>

            <div className="order-two-check">
            <label className="form-check-label" htmlFor="terms">
                terms
            </label>
            <input type="checkbox" className="form-check-input" id="terms" />
            </div>

            <div className="order-two-check">
            <label className="form-check-label" htmlFor="conditions">
                conditions
            </label>
            <input type="checkbox" className="form-check-input" id="conditions" />
            </div>
        </form>
        </div>
    }
    </>
  );
}

export default OrderProcessStepTwo;
