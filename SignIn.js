import React, { useState, useEffect } from 'react';
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
import Button_GLogin from './Button';
import Heading from './Heading';

function SignIn({login}) {
    // const [ user, setUser ] = useState(null);
    // const [ profile, setProfile ] = useState(null);
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

<section className="hero-section hero pt-5" data-background="" style={{backgroundImage: "url(" + Background + ")",height:750,marginBottom:100}}>
  <div className="container" >
    <div className="row">
      <div className="col-lg-12 text-center zindex-1">
        {/* <h1>Treasure Hunt</h1> */}
        <div style={{marginTop:-50}} className='left-right-animation'>
        <Heading/>
        </div>
        {/* <a href="#" className="btn btn-secondary btn-lg">explore us</a> */}
        <img className="img-fluid w-50 banner-image " src={I1} style={{borderRadius:30}}/>
      </div>
      <div style={{float:'right',marginTop:350,marginLeft:750}} className='up-down-animation'>
        <Button_GLogin login={login}/>
        </div>
    </div>
  </div>
  <div id="scene">
    <img className="img-fluid hero-bg-1 up-down-animation" src={bg_0} alt=""/>
    <img className="img-fluid hero-bg-2 left-right-animation" src={bg_1} alt=""/>
    <img className="img-fluid hero-bg-3 left-right-animation" src={bg_2} alt=""/>
    <img className="img-fluid hero-bg-4 up-down-animation" src={bg_3} alt=""/>
    <img className="img-fluid hero-bg-5 left-right-animation" src={bg_4} alt=""/>
    <img className="img-fluid hero-bg-6 up-down-animation" src={bg_1} alt=""/>
    <img className="img-fluid hero-bg-7 left-right-animation" src={bg_6} alt=""/>
    <img className="img-fluid hero-bg-8 up-down-animation" src={bg_7} alt=""/>
    <img className="img-fluid hero-bg-9 up-down-animation" src={bg_8} alt=""/>
  </div>
</section>
<section className="section-lg seo" style={{marginBottom:-120}}>
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="seo-image">
          <img className="img-fluid" src={I2} style={{width:530}} alt="form-img"/>
        </div>
      </div>
      <div className="col-md-5">
        <h2 className="section-title">A Complete Range Of SEO Marketing Services!</h2>
        <p>Far far away, behind the word mountains, far
          from the countries Vokalia and Consonantia.<br/>
          There live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of
          the Semantics, a large language ocean.
        </p>
      </div>
    </div>
  </div>
  <img className="img-fluid seo-bg" src={bg_5} alt="seo-bg"/>
  <img className="seo-bg-shape-1 left-right-animation" src={bg_1} alt="bg-shape"/>
  <img className="seo-bg-shape-2 up-down-animation" src={bg_2} alt="bg-shape"/>
  <img className="seo-bg-shape-3 left-right-animation" src={bg_9} alt="bg-shape"/>
</section>
<section className="section-lg service" style={{marginBottom:-150}}>
  <div className="container">
    <div className="row justify-content-between">
      <div className="col-md-5 order-2 order-md-1">
        <h2 className="section-title">Powerful Layout From Top To Bottom</h2>
        <p className="mb-4">Far far away, behind the word mountains,
          far from the countries Vokalia and Consonantia,
          there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean.</p>
        <ul className="pl-0 service-list">
          <li><i className="ti-layout-tab-window text-purple"></i>Responsive on any device</li>
          <li><i className="ti-layout-placeholder text-purple"></i>Very easy to customize</li>
          <li><i className="ti-support text-purple"></i>Effective support</li>
        </ul>
      </div>
      <div className="col-md-7 order-1 order-md-2">
        <img className="img-fluid layer-3" src={I3} alt="service"/>
      </div>
    </div>
  </div>
  <img className="img-fluid service-bg" src={bg_11} alt="service-bg"/>
  <img className="service-bg-shape-1 up-down-animation" src={bg_7} alt="background-shape"/>
  <img className="service-bg-shape-2 left-right-animation" src={bg_0} alt="background-shape"/>
</section>

<section className="section-lg team" id="team">
<div className="container">
    <div className="row justify-content-between">
      <div className="col-md-6 order-1 order-md-2">
        <img className="img-fluid layer-3" src={I4} alt="service"/>
      </div>
    </div>
  </div>
  <img src={bg_10} alt="team-bg" className="img-fluid team-bg"/>
  <img className="team-bg-shape-1 up-down-animation" src={bg_1} alt="background-shape"/>
  <img className="team-bg-shape-2 left-right-animation" src={bg_1} alt="background-shape"/>
  <img className="team-bg-shape-3 left-right-animation" src={bg_8} alt="background-shape"/>
  <img className="team-bg-shape-4 up-down-animation img-fluid" src={bg_12} alt="background-shape"/>
</section>

<section className="newsletter">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <h2>Subscribe to our newsletter</h2>
        <p className="mb-5">Receive updates, news and deals</p>
      </div>
      <div className="col-lg-8 col-sm-10 col-12 mx-auto">
        <form action="#">
          <div className="input-wrapper position-relative">
            <input type="email" className="newsletter-form" id="newsletter" placeholder="Enter your email"/>
            <button type="submit" value="send" className="btn newsletter-btn">subscribe</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <img className="newsletter-bg-shape left-right-animation" src={bg_9} alt="background-shape"/>
</section>

<footer className="footer-section footer" style={{backgroundImage: "url(" + Footer + ")"}}>
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
export default SignIn;