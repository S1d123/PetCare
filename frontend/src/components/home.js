/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import carousel from "../Images/carousel_1.jpg";
// import Our_Features from './features.js';
//  import news1_img from "../Images/cat.jpg";
//  import news2_img from "../Images/news1.jpg";
//  import Medicine from '../Components/Medicines/Medicine.js';
//  import Footer from './footer';

export default function home() {
  return (
    <>
    <div>
      <h1>
        Welcome to PetCare ,find all utitlies for your cute friend here.
      </h1>
    </div>
    {/* Carousel */}
    <div
    id="carouselExampleSlidesOnly"
    className="carousel slide"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner">
      <div className="carousel-item active" >
        <img
          src={carousel}
          style={{ border: "2px solid black"}}
          className="d-block w-100"
          alt="carousel-image"
        />
      </div>
    </div>
  </div>
  {/* <Our_Features/> */}
    </>
  );
}
