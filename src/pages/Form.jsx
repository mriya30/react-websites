import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()


    function Regist(data) {
        console.log(data);
    }

    return (
        <div className="bg-light" data-aos="fade">
        <h1 className="text-center mx-auto text-primary contact my-4 p-5 ">Contact Us</h1>
        <div className="container text-center contact-info">
        <div className="row">
        <div className="col-xs-12 col-md-4 mb-5">
            <i class="fa-solid fa-location-dot text-primary"></i>
            <p className="text-dark">203 Fake St. Mountain View, San Francisco,<br /> California, USA</p>
        </div>
          <div className="col-xs-12 col-md-4 mb-5 text-primary">
            <i class="fa-solid fa-phone"></i>
            <p>+1 232 3235 324</p>
        </div>
          <div className="col-xs-12 col-md-4 mb-5 text-primary">
           <i class="fa-regular fa-envelope"></i>
            <p>youremail@domain.com</p>
        </div>
        </div>
            
        </div>
            <div className="container">
      <form action="" method="post" onSubmit={handleSubmit(Regist)} className="bg-white p-5 col-10 mx-auto mb-5">
      <h2 className=" mb-4">Contact Form</h2>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">First Name</label>
            <input type="text" {...register('firstname',
                        {
                            required: {
                                value: true,
                                message: "enter your firstname"
                            },
                            minLength: {
                                value: 5,
                                message: "Minimum 5 Character"
                            },
                            maxLength: {
                                value: 15,
                                message: "Maximum 15 Character"
                            },
                            pattern: {
                                value: /[A-Za-z]{3}/,
                                message: 'Error message'  
                        },
                    }
                    )} 
                     className="form-control rounded-pill"/>
                     <p className="text-danger">{errors?.firstname?.message}</p>
          </div>
          <div className="col-md-6">
            <label className="form-label">Last Name</label>
            <input type="text" {...register('lastname',
                        {
                            required: {
                                value: true,
                                message: "enter your lastname"
                            },
                            minLength: {
                                value: 5,
                                message: "Minimum 5 Character"
                            },
                            maxLength: {
                                value: 15,
                                message: "Maximum 15 Character"
                            },
                            pattern: {
                                value: /[A-Za-z]{3}/,
                                message: 'Error message'  
                        },
                    }
                    )} 
                    className="form-control rounded-pill"/>
                     <p className="text-danger">{errors?.lastname?.message}</p>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" {...register('email',
                        {
                            required: {
                                value: true,
                                message: "enter your email"
                            },
                            minLength: {
                                value: 5,
                                message: "Minimum 5 Character"
                            },
                            maxLength: {
                                value: 15,
                                message: "Maximum 15 Character"
                            },
                            pattern: {
                                value: /[A-Za-z]{3}/,
                                message: 'Error message'  
                        },
                    }
                    )} 
                     className="form-control rounded-pill"/>
                      <p className="text-danger">{errors?.email?.message}</p>
        </div>
        <div className="mb-3">
          <label  className="form-label">Subject</label>
          <input type="text" {...register('subject',
                        {
                            required: {
                                value: true,
                                message: "enter your subject"
                            },
                            pattern: {
                                value: /[A-Za-z]{3}/,
                                message: 'error message'  
                        },
                    }
                    )}  
                     className="form-control rounded-pill"/>
                      <p className="text-danger">{errors?.subject?.message}</p>
        </div>
        <div className="mb-3">
          <label  className="form-label">Message</label>
          <textarea {...register('message',
                        {
                            required: {
                                value: true,
                                message: "Please enter your message"
                            },
                            pattern: {
                                value: /[A-Za-z]{3}/,
                                message: 'error message'  
                        },
                    }
                    )}
                    className="form-control msg" rows={5} placeholder="Write your notes or questions here..."></textarea>
                    <p className="text-danger">{errors?.message?.message}</p>
        </div>
        <button type="submit" className="btn btn-primary btn-block rounded-pill">Send Message</button>
        <br></br>
        <br></br>
      </form>
    </div>

        </div>
    )
}
export default Form