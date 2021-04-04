import { Col, Container, Row } from 'reactstrap';
import React, { Component } from 'react';
import Prism from 'prismjs';
import ReactMarkdown from 'react-markdown';
import { hot } from 'react-hot-loader';
import { Jumbotron, Sidebar } from '../common';

@hot(module)
class Home extends Component {
  content =
    'This library has been originally intended to be a fork of the [react-icheck](https://github.com/luqin/react-icheck)\n' +
    "created by [luqin](https://github.com/luqin) which didn't seem to be maintained anymore. However, after\n" +
    'diving into the original code it became more convenient to create a new one as a\n' +
    'drop-in replacement with some additional features.\n' +
    '\n' +
    '### Differences\n' +
    '\n' +
    'Below you can find the list of the main differences from the original\n' +
    '[react-icheck](https://github.com/luqin/react-icheck) library:\n' +
    '\n' +
    '- Refactored and improved the existing codebase:\n' +
    '\n' +
    '  - Added `onBlur` and `onFocus` label events to accompany `onMouseOut` and `onMouseOver`\n' +
    '  - Moved all corresponding properties from the `EnchantedSwitch` to both `Checkbox` and `Radio` components and removed unused ones\n' +
    '  - Removed `EnchantedSwitch` in favour of `Input` and `Label` components\n' +
    '  - Removed `refs` usage to follow the "[Don’t Overuse Refs](https://reactjs.org/docs/refs-and-the-dom.html#dont-overuse-refs)" guide\n' +
    '\n' +
    '- Introduced `CheckboxGroup` similar to the `RadioGroup`\n' +
    '\n' +
    '- Introduced `checkboxWrapClassName` and `checkboxWrapTag` properties for `RadioGroup` to control the wrapping behaviour of the radio elements\n' +
    '\n' +
    '- Introduced `labelTag` and `labelTagClassName` properties for both `Checkbox` and `Radio` components to control the rendering of the label content\n' +
    '\n' +
    '- Labels for `Checkbox` and `Radio` can be passed as children alongside with the original label property';

  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  render() {
    return (
      <main className="home" role="main">
        <Jumbotron />
        <Container>
          <Row>
            <Col lg={9}>
              <h2 className="heading">Overview</h2>
              <ReactMarkdown className="markdown" source={this.content} />
            </Col>
            <Sidebar />
          </Row>
        </Container>
      </main>
    );
  }
}

export default Home;
