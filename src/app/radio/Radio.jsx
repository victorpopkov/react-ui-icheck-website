import {
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
import classNames from 'classnames';
import { hot } from 'react-hot-loader';
import { Jumbotron, Sidebar } from '../common';
import RadioExampleDefault from './example/RadioExampleDefault';
import RadioExampleInline from './example/RadioExampleInline';
import RadioProperties from './RadioProperties';
import RadioStates from './RadioStates';

@hot(module)
class RadioPage extends Component {
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
    const { activeTab } = this.state;

    return (
      <main role="main">
        <Jumbotron />
        <Container>
          <Row>
            <Col md={9}>
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
                  <RadioExampleDefault />
                  <RadioExampleInline />
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

export default RadioPage;
