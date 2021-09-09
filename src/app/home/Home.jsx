import { Col, Container, Row } from 'reactstrap';
import React, { Component } from 'react';
import Prism from 'prismjs';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { hot } from 'react-hot-loader';
import { Jumbotron, Sidebar } from '../common';

@hot(module)
class Home extends Component {
  content = `This library has been originally intended to be a fork of the [react-icheck](https://github.com/luqin/react-icheck)
created by [luqin](https://github.com/luqin) which didn't seem to be maintained anymore. However, after
diving into the original code it became more convenient to create a new one as a
drop-in replacement with some additional features.

### Differences

Below you can find the list of the main differences from the original
[react-icheck](https://github.com/luqin/react-icheck) library:

- Added \`onBlur\` and \`onFocus\` label events to accompany \`onMouseOut\` and \`onMouseOver\`
- Added support for labels as \`Checkbox\` and \`Radio\` children
- Introduced \`CheckboxGroup\` similar to the \`RadioGroup\`
- Introduced \`labelTag\` and \`labelTagClassName\` properties for \`Checkbox\` and \`Radio\`
- Introduced \`radioWrapClassName\` and \`radioWrapTag\` properties for \`RadioGroup\`
- Moved corresponding properties from \`EnchantedSwitch\` to \`Checkbox\` and \`Radio\`
- Removed \`EnchantedSwitch\` in favour of \`Input\` and \`Label\`
- Removed \`refs\` usage to follow the "[Don’t Overuse Refs](https://reactjs.org/docs/refs-and-the-dom.html#dont-overuse-refs)" guide`;

  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  render() {
    const { latestRevision, latestVersion } = this.props;

    return (
      <main className="home" role="main">
        <Jumbotron
          latestRevision={latestRevision}
          latestVersion={latestVersion}
        />
        <Container>
          <Row>
            <Col lg={9}>
              <h2 className="heading">Overview</h2>
              <ReactMarkdown className="markdown">{this.content}</ReactMarkdown>
            </Col>
            <Sidebar />
          </Row>
        </Container>
      </main>
    );
  }
}

Home.propTypes = {
  latestRevision: PropTypes.string,
  latestVersion: PropTypes.string,
};

Home.defaultProps = {
  latestRevision: null,
  latestVersion: null,
};

export default Home;
