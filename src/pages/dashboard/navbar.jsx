import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaHome, FaSearch, FaPlusCircle, FaVideo } from 'react-icons/fa';

// CSS styling
import './index.css'; // Import the CSS file

const SocialNavbar = () => {
  return (
    <Navbar bg="light" className="social-navbar fixed-bottom">
      <Container>
        <Nav className="ms-auto d-flex justify-content-between w-100">
          {/* Home Icon */}
          <Nav.Link href="/" className="nav-icon">
            <FaHome size={24} />
          </Nav.Link>

          {/* Search Icon */}
          <Nav.Link href="/search" className="nav-icon">
            <FaSearch size={24} />
          </Nav.Link>

          {/* Post Icon */}
          <Nav.Link href="/post" className="nav-icon">
            <FaPlusCircle size={24} />
          </Nav.Link>

          {/* Video Icon */}
          <Nav.Link href="/video" className="nav-icon">
            <FaVideo size={24} />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default SocialNavbar;
