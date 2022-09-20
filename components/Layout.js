import { SSRProvider } from "react-bootstrap";
import { EndFooter } from "./EndFooter";
import Footer from "./Footer";

import NavbarComp from "./NavbarComp";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarComp />
      {children}
      <Footer />
      <EndFooter />
    </>
  );
};

export default Layout;
