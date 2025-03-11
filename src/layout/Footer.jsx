import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white mt-5 ">
      <div className="container p-5">
        <div className="row  mx-auto">
          <div className="col-md-4">
            <p style={{paddingLeft:'20px',fontSize:'18px'}} >About Us</p>
            <p style={{color:'#697073'}} className='p-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium
              magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.
            </p>
          </div>

          <div className="col-md-2">
            <p style={{fontSize:'18px',paddingLeft:'20px'}}>Quick Links</p>
            <ul className="list-unstyled ul-li p-3">
              <li><a href="#about" className="text-white">About Us</a></li>
              <li><a href="#services" className="text-white">Services</a></li>
              <li><a href="#testimonials" className="text-white">Testimonials</a></li>
              <li><a href="#contact" className="text-white">Contact Us</a></li>
            </ul>
          </div>

          <div className="col-md-3">
            <p style={{fontSize:'18px',paddingLeft:'30px'}}>Follow Us</p>
            <div className="d-flex fs-5 p-3">
              <a href="#facebook" className="text-white me-3"><i className="fab fa-facebook"></i></a>
              <a href="#twitter" className="text-white me-3"><i className="fab fa-twitter"></i></a>
              <a href="#instagram" className="text-white me-3"><i className="fab fa-instagram"></i></a>
              <a href="#linkedin" className="text-white me-3"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>

          <div className="col-md-3">
            <p style={{fontSize:'18px',paddingLeft:'20px'}}>Subscribe Newsletter</p>
            <div className="input-group ps-2">
              <input type="email" className="form-control rounded" placeholder="Enter Email" />
              <button className="btn btn-light" type="submit">Send</button>
            </div>
          </div>
        </div>

        <div className="text-center pt-4">
          <hr className="bg-white"/>
          <p className="mb-0 text-secondary mt-5" style={{letterSpacing:'1px'}}>
            Copyright ©2024 All rights reserved | This template is made with
            <span className="text-danger">❤</span> by <a href="https://colorlib.com" className="text-white">Colorlib</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
