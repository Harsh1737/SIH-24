import Home from "./mainhomepage components/Home"
import Navbar from "./mainhomepage components/Navbar";
import Footer from "./mainhomepage components/Footer";
import '../index.css';

const MainHomePage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
};

export default MainHomePage;
