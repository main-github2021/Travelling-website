import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Top from "../components/Top";
import ServiceImg from "../image/night.jpg";
function Service() {
  return (
    <>
      <Navbar />
      <Top
        cName="hero"
        topImg={ServiceImg}
        title="Providing Best Services"
        text="You will be satisfy with our service"
      />
      <Footer />
    </>
  );
}

export default Service;
