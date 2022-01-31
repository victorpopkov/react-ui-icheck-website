import { Col, Container, Row } from 'reactstrap';
import React, { Component } from 'react';
import Prism from 'prismjs';
import PropTypes from 'prop-types';
import { Jumbotron, Sidebar } from '../common';
import CheckboxExampleDefault from '../checkbox/example/CheckboxExampleDefault';
import RadioExampleDefault from '../radio/example/RadioExampleDefault';
import styles from './Home.scss';

class Home extends Component {
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
              <p>
                A small library to create customizable checkboxes and radios
                which can either use{' '}
                <a href="http://icheck.fronteed.com/">iCheck</a> skins or custom
                ones.
              </p>
              <Row className="pt-sm-4 pt-2">
                <Col className="pb-sm-4 pb-2" md={6}>
                  <CheckboxExampleDefault src={false} title="" />
                </Col>
                <Col className="pb-2" md={6}>
                  <RadioExampleDefault src={false} title="" />
                </Col>
              </Row>
              <p className="pt-3">
                This library has been originally intended to be a{' '}
                <a href="https://github.com/luqin/react-icheck">
                  luqin/react-icheck
                </a>{' '}
                fork. But, after diving into the original code it became more
                convenient to create a new one as a drop-in replacement with
                some additional changes:
              </p>
              <ul className={styles.differences}>
                <li>
                  Added <code>onBlur</code> and <code>onFocus</code> label
                  events to accompany <code>onMouseOut</code> and{' '}
                  <code>onMouseOver</code>
                </li>
                <li>
                  Added support for labels as <code>Checkbox</code> and{' '}
                  <code>Radio</code> children
                </li>
                <li>
                  Introduced <code>CheckboxGroup</code> similar to the{' '}
                  <code>RadioGroup</code>
                </li>
                <li>
                  Introduced <code>labelTag</code> and{' '}
                  <code>labelTagClassName</code> properties for{' '}
                  <code>Checkbox</code> and <code>Radio</code>
                </li>
                <li>
                  Introduced <code>radioWrapClassName</code> and{' '}
                  <code>radioWrapTag</code> properties for{' '}
                  <code>RadioGroup</code>
                </li>
                <li>
                  Moved corresponding properties from{' '}
                  <code>EnchantedSwitch</code> to <code>Checkbox</code> and{' '}
                  <code>Radio</code>
                </li>
                <li>
                  Removed <code>EnchantedSwitch</code> in favour of{' '}
                  <code>Input</code> and <code>Label</code>
                </li>
                <li>
                  {' '}
                  Removed <code>refs</code> usage to follow the{' '}
                  <a href="https://reactjs.org/docs/refs-and-the-dom.html#dont-overuse-refs">
                    Don&apos;t Overuse Refs
                  </a>{' '}
                  guide
                </li>
              </ul>
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
