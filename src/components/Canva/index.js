import Navegation from "../Navegation";
import Footer from "../Footer";

const Index = ({ children }) => {
  return (
    <>
      <Navegation />
      {children}
      <Footer />
    </>
  );
};

export default Index;
