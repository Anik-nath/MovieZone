import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark">
           <div className="container text-white pt-5">
               <div className="row px-3 px-lg-0 px-md-0 py-3 pb-5">
                   <div className="col-lg-4 col-md-4 col-12">
                        <h3 className="text-light">
                        <span className="h2 text-primary"><i className="fas fa-broom text-warning"></i></span>
                            MovieZone</h3>
                        <p className="text-white-50 py-3">We are a cleaning company that has been in the business for almost 7 years Since our inception we have built a formidable reputation as a high-quality.</p>
                      <div className="d-flex gap-3 fs-4">
                        <i className="fab fa-facebook text-white-50"></i>
                        <i className="fab fa-instagram text-white-50"></i>
                        <i className="fab fa-linkedin text-white-50"></i>
                        <i className="fab fa-github text-white-50"></i>
                      </div>
                   </div>
                   <div className="col-lg-4 col-md-4 col-12 my-5 my-lg-0 my-md-0">
                       <h5 className="pb-4">UseFul Link</h5>
                       <ul className="text-white-50 list-unstyled">
                           <li><i className="fas fa-chevron-right me-2"></i> About Us</li>
                           <li><i className="fas fa-chevron-right me-2 py-2"></i> Services</li>
                           <li><i className="fas fa-chevron-right me-2"></i> Testimonial</li>
                           <li><i className="fas fa-chevron-right me-2 py-2"></i> Pricing</li>
                           <li><i className="fas fa-chevron-right me-2"></i> Appoinment</li>
                       </ul>
                   </div>
                   <div className="col-lg-4 col-md-4 col-12">
                   <h5 className="pb-4">Our Services</h5>
                    <ul className="text-white-50 list-unstyled">
                        <li><i className="fas fa-chevron-right me-2"></i>Windows Cleaning Service</li>
                        <li><i className="fas fa-chevron-right me-2 py-2"></i>Bathroom Cleaning Service</li>
                        <li><i className="fas fa-chevron-right me-2"></i>Computer Cleaning Service</li>
                        <li><i className="fas fa-chevron-right me-2 py-2"></i>Express Cleaning Service</li>
                        <li><i className="fas fa-chevron-right me-2"></i>Carpet Cleaning Service</li>
                    </ul>
                   </div>
               </div><hr />
               <div className="row">
                   <div className="col-12 text-center pb-3">
                       <small className="text-white-50"> &copy; Copywrite 2021 Cleener.com </small>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Footer;