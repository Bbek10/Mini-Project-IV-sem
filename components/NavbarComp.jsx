import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
const NavbarComp = () => {
  return (
    <Navbar
      className={styles.container}
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="/">
          <div>
            <img
              src="/img/telephone.png"
              alt=""
              className={styles.callButton}
            />
            CALL US 0123456
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Our Food</Nav.Link>
            <Nav.Link href="/products/11">Order</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className={styles.cart}>
            <Nav>
              <Nav.Link href="#deets">Write to us</Nav.Link>
              <Nav.Link eventKey={2} href="/orders/11">
                Your Order
              </Nav.Link>
            </Nav>
          </div>

          <div className={styles.item}>
            {/* MAIN LOGO */}
            <Image src="/img/logob.png" alt="" width="150px" height="69px" />
            <div className={styles.cart}>
              <a href="/cart">
                <Image src="/img/cart.png" alt="" width="30px" height="30px" />
                <div className={styles.counter}>2</div>
              </a>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
