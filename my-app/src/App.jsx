import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "./components/Button";
import landingPageData from "./constent/WebData";
import Header from "./components/Header";
import Testimonials from "./components/Testimonial";
import Hero from "./components/Hero";
import Features from "./components/Features"
import Footer from "./components/Footer";



function App(){
const {header, hero, features, testimonials} = landingPageData;

const user = {
  isLogin : true
}

  return (
    <>


    <Header header={header} user={user} />

    <Hero hero={hero} />

    <Features features={features} />

    <Testimonials  testimonials={testimonials}/>

    <Footer header={header} />
    </>
  )
}

export default App