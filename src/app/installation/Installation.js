import { Col, Container, Row } from 'reactstrap';
import React, { Component } from 'react';
import Prism from 'prismjs';
import { hot } from 'react-hot-loader';
import { Jumbotron, Sidebar } from '../common'; // eslint-disable-line sort-imports

@hot(module)
class Installation extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <main role="main">
        <Jumbotron />
        <Container>
          <Row>
            <Col md={9}>
              <h2 className="heading">Installation</h2>
              <p>
                You can install this library as any other
                {' '}
                <a href="https://www.npmjs.com/" rel="noopener noreferrer" target="_blank">npm</a>
                {' '}
                package.
              </p>
              <p>
                If you are planning to use your own custom skin, then only the package of this
                library is needed:
              </p>
              <pre className="mb-3">
                <code className="language-bash">
                  {`# using npm
npm install react-ui-icheck --save

# using Yarn
yarn add react-ui-icheck`}
                </code>
              </pre>
              <p>
                If you are planning to use the original
                {' '}
                <a href="https://github.com/fronteed/icheck" rel="noopener noreferrer" target="_blank">iCheck</a>
                {' '}
                skins, then you should install both packages:
              </p>
              <pre>
                <code className="language-bash">
                  {`# using npm
npm install react-ui-icheck icheck --save

# using Yarn
yarn add react-ui-icheck icheck`}
                </code>
              </pre>
            </Col>
            <Sidebar />
          </Row>
        </Container>
      </main>
    );
  }
}

export default Installation;