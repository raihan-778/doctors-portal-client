import React from "react";
import Footer from "../../../shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Features from "../ServiceFeatures/ServiceFeatrues.js";
import Form from "../Form/Form";
import MakeAppointment from "../MakiAppointment/MakeAppointment";
import Services from "../Services/Services";
import SpecialService from "../SpecialService/SpecialService";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <Features></Features>
      <Services></Services>
      <SpecialService></SpecialService>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <Form></Form>
    </div>
  );
};

export default Home;
