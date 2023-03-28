import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import Logo from "../../assets/img/logo_Edspert.png";
import style from "./navbar.module.css";

function Navb() {
  return (
    <Navbar expand="lg" className={style.navbg} variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img className={style.logo} src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-nav-dropdown" />
        <Navbar.Collapse className={style.navitemparent} id="basic-nav-dropdown ">
          <Nav className={style.navitem}>
            {/* <Nav.Link href="#home">Program</Nav.Link>
            <Nav.Link href="#link">Bidang Ilmu</Nav.Link> */}
            <NavDropdown
              title={<span className="text-white">Program</span>}
              className={style.navdropdown}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                Webinar
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Bootcamp</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Online Course</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <NavDropdown
              title={<span className="text-white">Bidang Ilmu</span>}
              className={style.navdropdown}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                Tech Development
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Data</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="#link" className={style.navdropdown}>
              Tentang edspert
            </Nav.Link>
            <Button
              variant="danger"
              className="rounded-pill"
              style={{ width: "4 0vh", marginLeft: "40px" }}
            >
              Masuk/Daftar
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;
