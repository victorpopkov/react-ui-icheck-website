import { Checkbox, CheckboxGroup } from 'react-ui-icheck';
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
import { Example, Jumbotron, Sidebar } from '../common';
import CheckboxProperties from './CheckboxProperties';
import CheckboxStates from './CheckboxStates';

@hot(module)
class CheckboxPage extends Component {
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

  toggleActiveTab(tab) {
    const { activeTab } = this.state;

    if (activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  }

  renderDefaultExample = () => (
    <Example
      srcPrepend={`import 'icheck/skins/all.css';
import { Checkbox, CheckboxGroup } from 'react-ui-icheck';\n\n`}
      title="Default"
    >
      <CheckboxGroup
        checkboxWrapClassName="form-check p-0"
        checkboxWrapTag="div"
      >
        <Checkbox checkboxClass="icheckbox_square-blue" label="#checkbox-1" />
        <Checkbox
          checkboxClass="icheckbox_square-blue"
          label={'#checkbox-2, <span>default</span>'}
          labelTag="div"
          labelTagClassName="d-inline"
          defaultChecked
        />
        <Checkbox
          checkboxClass="icheckbox_square-blue"
          labelTag="div"
          labelTagClassName="d-inline"
          disabled
        >
          <span>#checkbox-3</span>
          {`, `}
          <span>disabled</span>
        </Checkbox>
      </CheckboxGroup>
    </Example>
  );

  renderInlineExample = () => (
    <Example
      srcPrepend={`import 'icheck/skins/all.css';
import { Checkbox, CheckboxGroup } from 'react-ui-icheck';\n\n`}
      title="Inline"
    >
      <CheckboxGroup
        checkboxWrapClassName="form-check form-check-inline"
        checkboxWrapTag="div"
        className="d-flex align-items-center"
      >
        <Checkbox checkboxClass="icheckbox_square-blue" label="#checkbox-1" />
        <Checkbox
          checkboxClass="icheckbox_square-blue"
          label={'#checkbox-2, <span>default</span>'}
          labelTag="div"
          labelTagClassName="d-inline"
          defaultChecked
        />
        <Checkbox
          checkboxClass="icheckbox_square-blue"
          labelTag="div"
          labelTagClassName="d-inline"
          disabled
        >
          <span>#checkbox-3</span>
          {`, `}
          <span>disabled</span>
        </Checkbox>
      </CheckboxGroup>
    </Example>
  );

  render() {
    const { activeTab } = this.state;

    return (
      <main role="main">
        <Jumbotron />
        <Container>
          <Row>
            <Col md={9}>
              <h2 className="heading">Checkbox</h2>
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
                  {this.renderDefaultExample()}
                  {this.renderInlineExample()}
                  <CheckboxStates />
                </TabPane>
                <TabPane tabId="properties">
                  <CheckboxProperties />
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

export default CheckboxPage;