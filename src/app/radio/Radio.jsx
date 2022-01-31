import {
  Alert,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap';
import React, { Component } from 'react';
import Prism from 'prismjs';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Jumbotron, Sidebar } from '../common';
import RadioExampleDefault from './example/RadioExampleDefault';
import RadioExampleFunctional from './example/RadioExampleFunctional';
import RadioExampleInline from './example/RadioExampleInline';
import RadioProperties from './RadioProperties';
import RadioStates from './RadioStates';

class Radio extends Component {
  constructor(props) {
    super(props);

    this.toggleActiveTab = this.toggleActiveTab.bind(this);

    this.state = {
      activeTab: 'examples',
    };
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  toggleActiveTab(tab) {
    const { activeTab } = this.state;

    if (activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  }

  render() {
    const { latestRevision, latestVersion } = this.props;
    const { activeTab } = this.state;

    return (
      <main role="main">
        <Jumbotron
          latestRevision={latestRevision}
          latestVersion={latestVersion}
        />
        <Container>
          <Row>
            <Col lg={9}>
              <h2 className="heading">Radio</h2>
              <Nav className="mt-4" tabs>
                <NavItem>
                  <NavLink
                    className={classNames({ active: activeTab === 'examples' })}
                    onClick={() => {
                      this.toggleActiveTab('examples');
                    }}
                  >
                    Examples
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classNames({
                      active: activeTab === 'properties',
                    })}
                    onClick={() => {
                      this.toggleActiveTab('properties');
                    }}
                  >
                    Properties
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab} className="mb-4">
                <TabPane tabId="examples">
                  <Alert color="primary" className="mt-4" fade={false}>
                    Bootstrap is used as an example for making horizontal and
                    inline radio groups. Replace with your own to match your
                    needs.
                  </Alert>
                  <RadioExampleDefault />
                  <RadioExampleInline />
                  <RadioExampleFunctional />
                  <RadioStates />
                </TabPane>
                <TabPane tabId="properties">
                  <RadioProperties />
                </TabPane>
              </TabContent>
            </Col>
            <Sidebar />
          </Row>
        </Container>
      </main>
    );
  }
}

Radio.propTypes = {
  latestRevision: PropTypes.string,
  latestVersion: PropTypes.string,
};

Radio.defaultProps = {
  latestRevision: null,
  latestVersion: null,
};

export default Radio;
