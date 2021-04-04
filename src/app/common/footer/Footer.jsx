import './Footer.scss';
import { Col, Container, Row } from 'reactstrap';
import React from 'react';
import { hot } from 'react-hot-loader';
import config from '@WebsiteConfig';
import GitHub from '../github/GitHub';

const Footer = () => (
  <footer className="footer" styleName="footer">
    <Container>
      <Row>
        <Col md={12} styleName="content">
          <ul className="mb-2 mb-md-0 mr-0 mr-md-4">
            <li>
              <a href={config.lib.repository}>View on GitHub</a>
            </li>
          </ul>
          <GitHub />
        </Col>
      </Row>
    </Container>
  </footer>
);

export default hot(module)(Footer);
