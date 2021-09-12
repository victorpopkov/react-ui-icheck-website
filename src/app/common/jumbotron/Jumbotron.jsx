import { Col, Container, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import React from 'react';
import { hot } from 'react-hot-loader';
import config from '@Config';
import Version from '../version/Version';

const Jumbotron = ({ latestRevision, latestVersion }) => (
  <Container>
    <Col className="py-5 text-center" lg={12}>
      <h1 className="mb-3">{config.lib.name}</h1>
      <Version
        className="me-2"
        color="primary"
        name={config.lib.name}
        revision={config.lib.revision}
        title="Latest Stable"
        version={`v${config.lib.version}`}
      />
      {latestVersion && (
        <Version
          name={config.lib.name}
          revision={latestRevision}
          title="Latest Development"
          version={`v${latestVersion}`}
        />
      )}
      <Row className="justify-content-center mt-3">
        <Col lg={6} md={8} xs={12}>
          <pre className="text-center">
            <code className="language-bash">
              {`npm install ${config.lib.name} --save`}
            </code>
          </pre>
        </Col>
      </Row>
    </Col>
  </Container>
);

Jumbotron.propTypes = {
  latestRevision: PropTypes.string,
  latestVersion: PropTypes.string,
};

Jumbotron.defaultProps = {
  latestRevision: null,
  latestVersion: null,
};

export default hot(module)(Jumbotron);
