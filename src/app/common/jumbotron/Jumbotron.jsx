import { Col, Container, Row } from 'reactstrap';
import React from 'react';
import { hot } from 'react-hot-loader';
import config from '@Config';
import JumbotronVersion from './JumbotronVersion';

const Jumbotron = () => (
  <Container>
    <Col className="py-5 text-center" lg={12}>
      <h1>{config.lib.name}</h1>
      <JumbotronVersion
        className="mt-4"
        name={config.lib.name}
        revision={config.lib.revision}
        title="Library"
        version={config.lib.version}
      />
      <JumbotronVersion
        className="mb-4"
        name={config.app.name}
        revision={config.app.revision}
        title="Website"
        version={config.app.version}
      />
      <Row className="justify-content-center">
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

export default hot(module)(Jumbotron);
