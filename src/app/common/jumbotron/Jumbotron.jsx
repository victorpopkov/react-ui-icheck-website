import './Jumbotron.scss';
import { Jumbotron as BaseJumbotron, Col, Container, Row } from 'reactstrap';
import React from 'react';
import { hot } from 'react-hot-loader';
import config from '@WebsiteConfig';
import JumbotronVersion from './JumbotronVersion';

const Jumbotron = () => (
  <BaseJumbotron className="m-0 pb-5 pt-5" styleName="jumbotron" tag="section">
    <Container>
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
        <Col lg={6} md={8} xl={4} xs={12}>
          <pre className="text-center">
            <code className="language-bash">
              {`npm install ${config.lib.name} --save`}
            </code>
          </pre>
        </Col>
      </Row>
    </Container>
  </BaseJumbotron>
);

export default hot(module)(Jumbotron);
