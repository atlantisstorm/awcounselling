import React, { useState } from 'react';
import { sendEmail, initState } from '../utils';

const Contact = () => {
  const [formState, setFormState] = useState(initState);

  const onChange = (event) => {
    const newFormState = {
      ...formState, 
      [event.target.name]: event.target.value, 
      status: ""
    };
    setFormState(newFormState);
  };

  const onClickSubmit = (event) => {
    event.preventDefault();
    sendEmail({ formState, setFormState });
  };

  const statusTextStyle = `text-${formState.statusTextStyle} pl-2`;

  return (
    <>
      <h5>Contact</h5>
      <p className="d-none">To contact me, please either fill in the contact form, use my email address, or call me by telephone.  My practise hours are 9am - 5pm (Mon– Thurs), but I am also available during evenings and weekends to help ensure my services fit around your needs. I am also available to facilitate online counselling sessions via Skype or Zoom.</p>
      <p>To contact me please either use my email address or call me by telephone.  My practise hours are 9am - 5pm (Mon– Thurs), but I am also available during evenings and weekends to help ensure my services fit around your needs. I am also available to facilitate online counselling sessions via Skype or Zoom.</p>
      <div className="row">
        <div className="d-none col-lg-6">
          <form method="" action="">
            <div className="form-row mb-3">
              <div className="col">
                <input type="text" className="form-control" onChange={ onChange } data-testid="form-firstname" placeholder="First name" name="first_name" />
              </div>
              <div className="col">
                <input type="text" className="form-control" onChange={ onChange } data-testid="form-surame" placeholder="Surname" name="surname" />
              </div>
           </div>
           <div className="form-row mb-3">
              <div className="col">
                <input type="text" className="form-control" onChange={ onChange } data-testid="form-email" placeholder="email" name="email" />
              </div>
           </div>
           <div className="form-row mb-3">
              <div className="col">
                <textarea className="form-control" rows="5" onChange={ onChange } data-testid="form-comment" placeholder="Place your message/question here" name="message"></textarea>
              </div>
           </div>
           <div className="form-row mb-3">
              <div className="col">
                <button 
                  type="button"
                  className="btn btn-secondary"
                  data-testid="submit-button"
                  onClick={ onClickSubmit }
                >Submit</button>
                { formState.status &&
                  <span className={ statusTextStyle }>{ formState.status }</span>
                }
              </div>
           </div>
          </form>
        </div>
        <div className="d-none col-lg-6">
        <h5>Aine Wilson Counselling</h5>
          <p>
            14 Park Hill<br/>
            Tattinderry<br/>
            Maguiresbridge<br/>
            Co. Fermanagh<br/>
            BT94 4AD
           </p>
           <p>
             <span className="font-weight-bold">t.</span> 028 6772 1046<br />
             <span className="font-weight-bold">m.</span> 07792 304 731<br />
             <span className="font-weight-bold">m.</span> 00353 (0) 863 086 381<br />
             <span className="font-weight-bold">e.</span> <a href="mailto:ainewilson12@hotmail.com">ainewilson12@hotmail.com</a>
           </p>
        </div>
        <div className="col-lg-6">
        <h5>Phone and email contact details</h5>          
          <p>
             <span className="font-weight-bold">t.</span> 028 6772 1046<br />
             <span className="font-weight-bold">m.</span> 07792 304 731<br />
             <span className="font-weight-bold">m.</span> 00353 (0) 863 086 381<br />
             <span className="font-weight-bold">e.</span> <a href="mailto:ainewilson12@hotmail.com">ainewilson12@hotmail.com</a>
           </p>
        </div>
        <div className="col-lg-6">
        <h5>Aine Wilson Counselling</h5>
          <p>
            14 Park Hill<br/>
            Tattinderry<br/>
            Maguiresbridge<br/>
            Co. Fermanagh<br/>
            BT94 4AD
           </p>
        </div>
      </div>
    </>
  )
}

export default Contact;