import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import cspocket from './../../images/cspocket.jfif';
import IconButton from '@mui/material/IconButton';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Contact() {
  return (
    <div className='contact-page'>
      <div className='mt-5 p-5'>
        <h2 className='text-center text-warning'>Contact Us</h2>
        <div className='text-center mb-3'>
          <img src={cspocket} alt="CSPocket Logo" className='w-5' />
        </div>
        <Container className='text-center'>
          <Row className='mb-3'>
            <Col>
              <a href="https://wa.me/9094077295" target="_blank" rel="noreferrer">
                <WhatsAppIcon sx={{ fontSize: 40, color: 'green' }} />
                <br />
                Chat us
              </a>
            </Col>
          </Row>
          <Row className='justify-content-center'>
            <Col>
              <IconButton onClick={() => window.open('https://youtube.com/@chidambaraselvan1729?si=VCpmcJT1bovrFP2V', '_blank')}>
                <YouTubeIcon sx={{ fontSize: 40, color: 'red' }} />
              </IconButton>
              <IconButton onClick={() => window.open('https://www.instagram.com/cspocketindia/', '_blank')}>
                <InstagramIcon sx={{ fontSize: 40, color: 'purple' }} />
              </IconButton>
              <IconButton onClick={() => window.open('https://m.facebook.com/csYOUTUBER', '_blank')}>
                <FacebookIcon sx={{ fontSize: 40, color: 'blue' }} />
              </IconButton>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Contact;
