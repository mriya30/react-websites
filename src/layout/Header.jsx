import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';


function Header() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();  // Refresh AOS to detect any changes
  }, []);

  return (
    <>
      <div className="fixed-top shadow ">
        <nav className="navbar navbar-expand-lg " style={{backgroundColor:'white'}}>
          <div className="container ">
            <a className="navbar-brand text-uppercase col-6 col-xl-2 text-primary" href="#"> Oneder
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-right">
                <li className="nav-item">
                  <a className="nav-link active text-primary" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                  >
                    About Us
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Testimonials
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <header className="img" data-aos="fade-up" data-aos-duration="1000">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-8 mt-lg-5 text-center" data-aos="fade-up" data-aos-duration="1000">
            <h1>I'M A CREATIVE ONE PAGE TEMPLATE BY COLORLIB</h1>
            <button className="btn btn-primary rounded-pill me-2 mt-4">Get In Touch</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
