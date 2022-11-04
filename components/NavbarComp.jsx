import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useSelector } from "react-redux";
import Link from "next/link";
import DigitalClock from "./DigitalClock";
const NavbarComp = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Navbar
      className={styles.container}
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container className={styles.container}>
        <Navbar.Brand>
          <Link href="/" passHref>
            <div>
              <img
                src="/img/telephone.png"
                alt=""
                className={styles.callButton}
              />
              CALL US 0123456
            </div>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <ul className={styles.list}>
              <Link href="/">
                <li className={styles.listItem}>Our Food</li>
              </Link>
              <Link href="/cart">
                <li className={styles.listItem}>Your Cart</li>
              </Link>
              <Link href="/contactUs">
                <li className={styles.listItem}>Contact Us</li>
              </Link>
              <Link href="/">
                <li className={styles.listItem}>
                  <DigitalClock />
                </li>
              </Link>
            </ul>
          </Nav>

          <div className={styles.cart}>
            <Nav>
              <div className={styles.texts}>
                <Link href="/admin/login">Admin page</Link>
              </div>
            </Nav>
          </div>

          <div className={styles.item}>
            {/* MAIN LOGO */}
            <Link href="/" passHref>
              <Image src="/img/logob.png" alt="" width="150px" height="69px" />
            </Link>
            {/*CART LOGO*/}
            <Link href="/cart" passHref>
              <div className={styles.cart}>
                <a href="/cart">
                  <Image
                    src="/img/cart.png"
                    alt=""
                    width="30px"
                    height="30px"
                  />
                  <div className={styles.counter}>{quantity}</div>
                </a>
              </div>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
