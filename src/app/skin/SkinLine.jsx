/* eslint-disable react/jsx-wrap-multilines */
import { Checkbox, CheckboxGroup, Radio, RadioGroup } from 'react-ui-icheck';
import { Col, Container, Row } from 'reactstrap';
import React, { Component } from 'react';
import Prism from 'prismjs';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Jumbotron, Sidebar } from '../common';
import SkinColorSchemes from './SkinColorSchemes';

@hot(module)
class SkinLine extends Component {
  constructor(props) {
    super(props);

    this.handleColor = this.handleColor.bind(this);

    const { color } = props;

    this.state = {
      prevColor: null,
      radioValue: '2',
      color,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.color !== state.prevColor) {
      return {
        color: props.color,
        prevColor: props.color,
      };
    }
    return null;
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  getCheckboxClass() {
    const { color } = this.state;

    return color ? `icheckbox_line-${color}` : 'icheckbox_line';
  }

  getRadioClass() {
    const { color } = this.state;

    return color ? `iradio_line-${color}` : 'iradio_line';
  }

  handleColor(color) {
    this.setState({ color });
  }

  render() {
    const { color, radioValue } = this.state;

    return (
      <main role="main">
        <Jumbotron />
        <Container>
          <Row>
            <Col md={9}>
              <h2 className="heading">Line Skin</h2>
              <Col className="skin-line mt-4" md={11}>
                <Row>
                  <Col className="mb-2 mb-lg-0" lg={6} md={12}>
                    <CheckboxGroup
                      checkboxWrapClassName="form-check mb-1 p-0"
                      checkboxWrapTag="div"
                    >
                      <Checkbox
                        checkboxClass={this.getCheckboxClass()}
                        insert={
                          <div>
                            <div className="icheck_line-icon" />
                            Checkbox
                          </div>
                        }
                      />
                      <Checkbox
                        checkboxClass={this.getCheckboxClass()}
                        insert={
                          <div>
                            <div className="icheck_line-icon" />
                            Checkbox, defaultChecked
                          </div>
                        }
                        defaultChecked
                      />
                      <Checkbox
                        checkboxClass={this.getCheckboxClass()}
                        insert={
                          <div>
                            <div className="icheck_line-icon" />
                            Checkbox, disabled
                          </div>
                        }
                        disabled
                      />
                      <Checkbox
                        checkboxClass={this.getCheckboxClass()}
                        insert={
                          <div>
                            <div className="icheck_line-icon" />
                            Checkbox, defaultChecked, disabled
                          </div>
                        }
                        defaultChecked
                        disabled
                      />
                    </CheckboxGroup>
                  </Col>
                  <Col className="mt-2 mt-lg-0" lg={6} md={12}>
                    <RadioGroup
                      name="example"
                      radioWrapClassName="form-check mb-1 p-0"
                      radioWrapTag="div"
                      value={radioValue}
                      onChange={(event, value) => {
                        this.setState({
                          radioValue: value,
                        });
                      }}
                    >
                      <Radio
                        insert={'<div class="icheck_line-icon"></div>Radio'}
                        radioClass={this.getRadioClass()}
                        value="1"
                      />
                      <Radio
                        insert={
                          <div>
                            <div className="icheck_line-icon" />
                            Radio, defaultChecked
                          </div>
                        }
                        radioClass={this.getRadioClass()}
                        value="2"
                        defaultChecked
                      />
                      <Radio
                        insert={
                          <div>
                            <div className="icheck_line-icon" />
                            Radio, disabled
                          </div>
                        }
                        radioClass={this.getRadioClass()}
                        value="3"
                        disabled
                      />
                      <Radio
                        insert={
                          <div>
                            <div className="icheck_line-icon" />
                            Radio, defaultChecked, disabled
                          </div>
                        }
                        radioClass={this.getRadioClass()}
                        value="4"
                        defaultChecked
                        disabled
                      />
                    </RadioGroup>
                  </Col>
                </Row>
              </Col>
              <Row>
                <Col className="pt-4" md={11}>
                  <SkinColorSchemes color={color} onChange={this.handleColor} />
                </Col>
              </Row>
              <Row>
                <Col className="pt-4" md={11}>
                  <pre className="m-0">
                    <code className="language-jsx">
                      {`import 'icheck/skins/line/${color || 'line'}.css';
import { Checkbox, Radio } from 'react-ui-icheck';

<Checkbox checkboxClassName="${this.getCheckboxClass()}" />
<Radio radioClassName="${this.getRadioClass()}" />`}
                    </code>
                  </pre>
                </Col>
              </Row>
            </Col>
            <Sidebar />
          </Row>
        </Container>
      </main>
    );
  }
}

SkinLine.propTypes = {
  color: PropTypes.string,
};

SkinLine.defaultProps = {
  color: null,
};

export default SkinLine;
