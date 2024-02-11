import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';



function App() {
  return (
    <div>
      <Navbar expand="lg" className='fixed-top bg-warning  shadow'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand font-bold fw-semibold text-uppercase text-light'>
              cspocket
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100 '>
              <Nav.Link href='/' className='active text-uppercase font-bold text-light'>Home</Nav.Link>
              <Nav.Link href='/about' className='text-uppercase font-bold text-light'>About</Nav.Link>
              <Nav.Link href='/contact' className='text-uppercase font-bold text-light'>Contact</Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
         
      </Navbar>


      <Routes>
  
      
        <Route path='/' element={<Home />} />
        <Route path='/app' element={<App />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        
      </Routes>
      

      
    </div>
  );
}

export default App;