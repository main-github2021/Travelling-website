import Navbar from "../components/Navbar";
import Top from "../components/Top";
import HomeImg from "../image/7.jpg";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import Slider from "../components/Slider";

function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
