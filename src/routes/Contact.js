import Navbar from "../components/Navbar";
import Top from "../components/Top";
import ContactImg from "../image/2.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
function Contact() {
  return (
    <>
      <Navbar />
      <Top
        cName="hero"
        topImg={ContactImg}
        title="For Any Query Contact Us"
        text="We will try our best to give accurate information"
      />
      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;
