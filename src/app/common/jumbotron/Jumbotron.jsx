import './Jumbotron.scss';
import {
  Badge,
  Jumbotron as BaseJumbotron,
  Col,
  Container,
  Row,
} from 'reactstrap';
import React from 'react';
import { hot } from 'react-hot-loader';
import config from '@WebsiteConfig';

const Jumbotron = () => (
  <BaseJumbotron className="m-0 pb-5 pt-5" styleName="jumbotron" tag="section">
    <Container>
      <h1>{config.lib.name}</h1>
      <h6 className="mt-4">
        <span className="align-middle">Website version:</span>
        {` `}
        <Badge className="align-middle">{`${config.app.version}`}</Badge>
        {config.app.revision && ` `}
        {config.app.revision && (
          <Badge color="light" className="align-middle">
            <a
              href={`https://github.com/victorpopkov/${config.app.name}/commit/${config.app.revision}`}
              rel="noreferrer"
              target="_blank"
            >
              {`${config.app.revision.substring(0, 7)}`}
            </a>
          </Badge>
        )}
      </h6>
      <h6 className="mb-4">
        <span className="align-middle">Library version:</span>
        {` `}
        <Badge className="align-middle">{config.lib.version}</Badge>
        {config.lib.revision && ` `}
        {config.lib.revision && (
          <Badge color="light" className="align-middle">
            <a
              href={`https://github.com/victorpopkov/${config.lib.name}/commit/${config.lib.revision}`}
              rel="noreferrer"
              target="_blank"
            >
              {`${config.lib.revision.substring(0, 7)}`}
            </a>
          </Badge>
        )}
      </h6>
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
