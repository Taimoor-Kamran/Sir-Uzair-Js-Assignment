import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "./components/Button";
import landingPageData from "./constent/WebData";
import Header from "./components/Header";
import Testimonials from "./components/Testimonial";
import Hero from "./components/Hero";
import Features from "./components/Features"
import Footer from "./components/Footer";

// import './App.css'

function App() {
  console.log(landingPageData);
  const { header, hero, features, testimonials } = landingPageData;
  const user = {
    isLogin : true,
  }

  return (
    <div>
    <Header header={header} user={user}/>

    <Hero hero={hero}/>

    <Features features={features} />

    <Testimonials testimonials={testimonials} />

  <Footer header={header} />         


    </div>
  );
}

export default App;
