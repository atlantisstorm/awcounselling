import React from 'react';

const Contact = () => {
  return (
    <>
      <h5>Contact</h5>
      <p>To contact me, please either fill in the contact form, use my email address, or call me by telephone.  My practise hours are 9am - 5pm (Mon– Thurs), but I am also available during evenings and weekends to help ensure my services fit around your needs. I am also available to facilitate online counselling sessions via Skype or Zoom.</p>
      <div className="row">
        <div className="col-lg-6">
          <form method="" action="">
            <div className="form-row mb-3">
              <div className="col">
                <input type="text" className="form-control" placeholder="First name" name="first-name" />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Surname" name="surname" />
              </div>
           </div>
           <div className="form-row mb-3">
              <div className="col">
                <input type="text" className="form-control" placeholder="email" name="email" />
              </div>
           </div>
           <div className="form-row mb-3">
              <div className="col">
                <textarea className="form-control" rows="5" placeholder="Place your comment/question here"></textarea>
              </div>
           </div>
           <div className="form-row mb-3">
              <div className="col">
                <button type="button" className="btn btn-secondary">Submit</button>
              </div>
           </div>
          </form>
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

           <p>
             <span className="font-weight-bold">t.</span> 028 6772 1046<br />
             <span className="font-weight-bold">m.</span> 07792 304 731<br />
             <span className="font-weight-bold">m.</span> 00353 (0) 863 086 381<br />
             <span className="font-weight-bold">e.</span> ainewilson12@hotmail.com
           </p>
        </div>
      </div>
    </>
  )
}

export default Contact;