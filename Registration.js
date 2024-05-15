import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./plugins/bootstrap/bootstrap.min.css";
import "./plugins/themify-icons/themify-icons.css";
import "./plugins/slick/slick.css";
import "./plugins/Venobox/venobox.css";
import "./plugins/aos/aos.css";
import "./css/style.css";
import Background from './images/hero-area/banner-bg.png';
import Footer from "./images/backgrounds/footer-bg.png"
import bg_0 from "./images/background-shape/feature-bg-2.png";
import bg_1 from "./images/background-shape/seo-ball-1.png";
import bg_2 from "./images/background-shape/seo-half-cycle.png";
import bg_3 from "./images/background-shape/green-dot.png";
import bg_4 from "./images/background-shape/blue-half-cycle.png";
import bg_5 from "./images/backgrounds/seo-bg.png";
import bg_6 from "./images/background-shape/yellow-triangle.png";
import bg_7 from "./images/background-shape/service-half-cycle.png";
import bg_8 from "./images/background-shape/team-bg-triangle.png";
import bg_9 from "./images/background-shape/seo-ball-2.png";
import bg_11 from "./images/backgrounds/service-bg.png"
import I1 from "./images/my/luffy-1.png";
import I2 from "./images/my/zoro-1.png";
import I3 from "./images/my/sanji.png";
import I4 from "./images/my/luffy-2.png";
import bg_10 from "./images/backgrounds/team-bg.png";
import bg_12 from "./images/background-shape/team-bg-dots.png";
import bg_13 from "./images/background-shape/green-half-cycle.png";
import Button_GLogin from './Button';
import Heading from './Heading';
import qR from './images/my/qr.jpg'

function Registration({login}) {
    const [ form1, setForm1 ] = useState(null);
    const [ form2, setForm2 ] = useState(null);
    // const [ profile, setProfile ] = useState(null);


const sendData = () => {
  const data = {
    crew_name: form1.crew_name,
    captain_name: form1.captain_name ,
    phone_no: form1.phone_no,
    email: login.email,
    member1_name: form1.member1_name,
    member2_name: form1.member2_name,
    member3_name: form1.member3_name,
    member4_name: form1.member4_name,
    member5_name: form1.member5_name,
    college_name: form1.college_name,
    sender_name: form2.sender_name,
    upi_id: form2.upi_id,
    transaction_id: form2.transaction_id,
    verify: 0,
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
  }
  axios
  .post('http://localhost:3011/crew',data)
  .then((response) => {
    console.log('Form submitted:', response.data);
  })
  .catch((error) => {
    console.error('Error submitting form:', error);
  });
}



    return(
        <>
<section className="fixed-top navigation">
  <div className="container">
    {/* <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="index.html"><img src={"./images/logo.png"} alt="logo"/></a>
      <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse text-center" id="navbar">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="index.html">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll" href="#feature">Feature</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about.html">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="service.html">Service</a>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll" href="#team">Team</a>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll" href="#pricing">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact.html">Contact</a>
          </li>
        </ul>
        <a href="#" className="btn btn-primary ml-lg-3 primary-shadow">Try Free</a>
      </div>
    </nav> */}
  </div>
</section>

<section className="section-lg contact" style={{marginTop:-60}}>
    <div className="container" style={{marginTop:-50}}>
        <div className="row">
            <div className="col-lg-12 text-center">
                <h2 className="section-title">Registration {login.name} </h2>
            </div>
        </div>
        {form1 ? <form onSubmit={(e) => {
            e.preventDefault();
            setForm2(e);
            sendData();
        }}>
            <div className="row contact-bg p-5 rounded mb-0 ml-5 mr-5">
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <img src={qR} width={'100%'}/>
                </div>
                <div className="col-lg-6">
                    <input type="number" maxLength={12} className="form-control mb-3" id="transaction_id" name="transaction_id" placeholder="Your Transaction ID" required/>
                    <input type="email" className="form-control mb-3" id="upi_id" name="upi_id" placeholder="Your UPI ID" required/>
                    <input type="text" className="form-control mb-3" id="sender_name" name="sender_name" placeholder="Your Sender Name" required/>
                    <button type="submit" value="send" className="btn btn-secondary float-right">DONE</button>
                </div>
            </div>
        </form>    :
        <form onSubmit={(e) => {
            e.preventDefault();
            setForm1(e);
        }}>
            <div className="row contact-bg p-5 rounded mb-0 ml-5 mr-5">
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <input type="text" className="form-control mb-3" id="crew_name" name="crew_name" placeholder="Your Crew Name" required/>
                    <input type="text" className="form-control mb-3" id="captain_name" name="captain_name" placeholder="Your Captain Name" required/>
                    <input type="text" className="form-control mb-3" id="member2_name" name="member2_name" placeholder="Your Crew Member 3" required/>
                    <input type="text" className="form-control mb-3" id="member4_name" name="member4_name" placeholder="Your Crew Member 5 (Optional)"/>
                    <input type="text" className="form-control mb-3" id="college_name" name="college_name" placeholder="Your College Name" required/>
                </div>
                <div className="col-lg-6">
                    <input type="tel" className="form-control mb-3" id="phone_no" name="phone_no" placeholder="Your Phone (Whatsapp)" required/>
                    <input type="email" className="form-control mb-3" id="email" name="email" placeholder="Your Email" defaultValue={login.email} required/>
                    <input type="text" className="form-control mb-3" id="member1_name" name="member1_name" placeholder="Your Crew Member 2" required/>
                    <input type="text" className="form-control mb-3" id="member3_name" name="member3_name" placeholder="Your Crew Member 4" required/>
                    <input type="text" className="form-control mb-3" id="member5_name" name="member5_name" placeholder="Your Crew Member 6 (Optional)"/>
                    <button type="submit" value="send" className="btn btn-secondary float-right">NEXT</button>
                </div>
            </div>
        </form>} 
        
    </div>
    <img className="contact-bg-1 up-down-animation" src={bg_0} alt="background-shape"/>
    <img className="contact-bg-2 left-right-animation" src={bg_13} alt="background-shape"/>
    <img className="contact-bg-3 up-down-animation" src={bg_3} alt="background-shape"/>
    <img className="contact-bg-4 left-right-animation" src={bg_7} alt="background-shape"/>
    <img className="contact-bg-5 up-down-animation" src={bg_0} alt="background-shape"/>
</section>

<footer className="footer-section footer" style={{backgroundImage: "url(" + Footer + ")",marginTop:-100}}>
  <div className="container">
    <div className="row">
      {/* <div className="col-lg-4 text-center text-lg-left mb-4 mb-lg-0">
        <a href="index.html">
          <img className="img-fluid" src="images/logo.png" alt="logo"/>
        </a>
      </div> */}
      {/* <nav className="col-lg-8 align-self-center mb-5">
        <ul className="list-inline text-lg-right text-center footer-menu">
          <li className="list-inline-item active"><a href="index.html">Home</a></li>
          <li className="list-inline-item"><a className="page-scroll" href="#feature">Feature</a></li>
          <li className="list-inline-item"><a href="about.html">About</a></li>
          <li className="list-inline-item"><a className="page-scroll" href="#team">Team</a></li>
          <li className="list-inline-item"><a className="page-scroll" href="#pricing">Pricing</a></li>
          <li className="list-inline-item"><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
      <nav className="col-12">
        <ul className="list-inline text-lg-right text-center social-icon">
          <li className="list-inline-item">
            <a className="facebook" href="#"><i className="ti-facebook"></i></a>
          </li>
          <li className="list-inline-item">
            <a className="twitter" href="#"><i className="ti-twitter-alt"></i></a>
          </li>
          <li className="list-inline-item">
            <a className="linkedin" href="#"><i className="ti-linkedin"></i></a>
          </li>
          <li className="list-inline-item">
            <a className="black" href="#"><i className="ti-github"></i></a>
          </li>
        </ul>
      </nav> */}
    </div>
  </div>
</footer>
</>
    );
}
export default Registration;