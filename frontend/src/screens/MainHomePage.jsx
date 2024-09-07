import components from "../components";

const { Home, Navbar, Footer } = components;

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
