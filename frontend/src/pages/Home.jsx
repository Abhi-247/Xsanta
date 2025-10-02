import Hero from "../components/Hero";
import Process from "../components/Process";
import Services from "../components/Services";
import ClientTestimonials from "../components/Testimonial";
import WhyChooseXSANTA from "../components/WhyChooseXSANTA";

const Home=()=>{
  return(
    <>
    <Hero/>
    <Services/>
    <WhyChooseXSANTA/>
    {/* <ClientTestimonials/> */}
    <Process/>

    </>
  )
}
export default Home;