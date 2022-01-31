import { Col, Container, Row } from 'reactstrap';
import React from 'react';
import classNames from 'classnames';
import config from '@Config';
import styles from './Footer.scss';
import Version from '../version/Version';

const Footer = () => (
  <footer className={classNames(styles.footer, 'footer')}>
    <Container>
      <Row className="align-items-center">
        <Col className={styles.content} md={12}>
          <ul>
            <li>
              <a href={config.lib.repository}>View on GitHub</a>
            </li>
          </ul>
          <Version
            name={config.app.name}
            revision={config.app.revision}
            title="Website Release"
            version={`v${config.app.version}`}
          />
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
