import { Col, Container, Row } from 'reactstrap';
import React, { Component } from 'react';
import Prism from 'prismjs';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { hot } from 'react-hot-loader';
import { Jumbotron, Sidebar } from '../common';

@hot(module)
class Installation extends Component {
  content =
    'The library can be installed like any other [npm](https://www.npmjs.com/) package.\n' +
    '\n' +
    'If you are planning to use your custom skin(s):\n' +
    '\n' +
    '```bash\n' +
    '$ npm install react-ui-icheck --save\n' +
    '# or\n' +
    '$ yarn add react-ui-icheck\n' +
    '```\n' +
    '\n' +
    'However, if you are planning to use [iCheck](https://github.com/fronteed/icheck) skin(s) you will need to install\n' +
    'the `icheck` package as well:\n' +
    '\n' +
    '```bash\n' +
    '$ npm install react-ui-icheck icheck --save\n' +
    '# or\n' +
    '$ yarn add react-ui-icheck icheck\n' +
    '```';

  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  render() {
    const { latestRevision, latestVersion } = this.props;

    return (
      <main role="main">
        <Jumbotron
          latestRevision={latestRevision}
          latestVersion={latestVersion}
        />
        <Container>
          <Row>
            <Col lg={9}>
              <h2 className="heading">Installation</h2>
              <ReactMarkdown className="markdown">{this.content}</ReactMarkdown>
            </Col>
            <Sidebar />
          </Row>
        </Container>
      </main>
    );
  }
}

Installation.propTypes = {
  latestRevision: PropTypes.string,
  latestVersion: PropTypes.string,
};

Installation.defaultProps = {
  latestRevision: null,
  latestVersion: null,
};

export default Installation;
