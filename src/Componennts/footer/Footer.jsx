import { Nav, NavLink } from 'react-bootstrap';

const MyFooter = () => {
  return (
    <div className="foot">
      <footer className="py-4 my-0 " style={{ backgroundColor: '#198754', color: 'white' }}>
        <Nav className="justify-content-center border-bottom pb-3 mb-3">
          <Nav.Item>
            <NavLink to="/home" className="px-2 text-white">Home</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/therepies" className="px-2 text-white">Therepies</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/community" className="px-2 text-white">Community</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/about" className="px-2 text-white">About Us</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/contact" className="px-2 text-white">Contact Us</NavLink>
          </Nav.Item>
        </Nav>
        <p className="text-center">© 2024 PureCalm</p>
      </footer>
    </div>
  );
};

export default MyFooter;
