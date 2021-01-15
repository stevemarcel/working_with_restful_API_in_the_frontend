import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className='text-center'>
          <Col xs={12} className='py-3'>
            &copy; {new Date().getFullYear()} Stevemarcel. All Rights Reserved.
          </Col>
          <Col xs={12} className='pb-3'>
            <a
              className='px-3'
              href='https://linkedin.com/in/onyejuluwa-stephen-098733190'
              rel='noreferrer'
              target='_blank'
            >
              <i className='fab fa-linkedin'></i>
            </a>
            <a
              className='px-3'
              href='https://github.com/stevemarcel'
              rel='noreferrer'
              target='_blank'
            >
              <i className='fab fa-github'></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
