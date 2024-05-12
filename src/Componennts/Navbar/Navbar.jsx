import "./navbar.css"
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';


function Navb() {
  return (
    <div>
        <Navbar fixed="top" expand="sm" bg="success" variant="dark" aria-label="Third navbar example" className="navv">

      <Navbar.Brand to="#" className="mx-5" style={{ fontSize: '18px', display: 'flex', alignItems: 'center',gap:'5px' }}>
        <img
          alt=""
          src="/PureCalm_circle.png"
          width="40"
          height="40"
          className="d-inline-block align-top"
        />{'   '}
        <b>PureCalm</b>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarsExample03" />
      <Navbar.Collapse id="navbarsExample03">
        <Nav className="me-auto mb-2 mb-sm-0">
          <NavLink to={"/home"}>Home</NavLink>
          <NavDropdown title="Therepies" to={"/Therepies"} id="basic-nav-dropdown">
            <NavDropdown.Item to={"/yoga"}>Yoga</NavDropdown.Item>
            <NavDropdown.Item to={"/spiritual"}>Spiritual</NavDropdown.Item>
            <NavDropdown.Item to={"/music"}>Music</NavDropdown.Item>
          </NavDropdown>
          <NavLink to={"/community"} >Community</NavLink>
          <NavLink to={"/about"}>About Us</NavLink>
          <NavLink to={"/contact"}>Contact Us</NavLink>
        </Nav>
      </Navbar.Collapse>
      <Link to={"/profile"}>
      <Navbar.Text className="mx-3">
          <img
            alt="Profile"
            src="/PureCalm.jpg"
            width="40"
            height="40"
            style={{ borderRadius: '50%', cursor: 'pointer' }}
          />
        </Navbar.Text>
        </Link>
        
    </Navbar>
    </div>
  )
}

export default Navb