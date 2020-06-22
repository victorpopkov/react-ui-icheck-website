import './Skin.scss';
import { Checkbox, CheckboxGroup, Radio, RadioGroup } from 'react-ui-icheck';
import { Col, Container, Row } from 'reactstrap';
import React, { Component } from 'react';
import Prism from 'prismjs';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Sidebar from '../common/sidebar/Sidebar';
import SkinColorSchemes from './SkinColorSchemes';

@hot(module)
class Skin extends Component {
  constructor(props) {
    super(props);

    this.handleColor = this.handleColor.bind(this);

    this.state = {
      color: props.color,
      prevColor: null,
      prevSkin: null,
      radioValue: '2',
      skin: props.skin,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.color !== state.prevColor || props.skin !== state.prevSkin) {
      return {
        color: props.color,
        prevColor: props.color,
        prevSkin: state.skin,
        skin: props.skin,
      };
    }
    return null;
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  getCheckboxClass() {
    const { skin, color } = this.state;
    if (color) {
      return `icheckbox_${skin}-${color}`;
    }
    return `icheckbox_${skin}`;
  }

  getRadioClass() {
    const { skin, color } = this.state;
    if (color) {
      return `iradio_${skin}-${color}`;
    }
    return `iradio_${skin}`;
  }

  handleColor(color) {
    this.setState({ color });
  }

  render() {
    const { colorSchemes, defaultColor, skin, title } = this.props;
    const { color, radioValue } = this.state;

    return (
      <Container>
        <Row>
          <Col md={9}>
            <h2 className="heading">{title}</h2>
            <Col className={`skin-${skin} mt-4`} md={11}>
              <Row>
                <Col className="mb-2 mb-lg-0" lg={6} md={12}>
                  <CheckboxGroup
                    checkboxWrapClassName="form-check p-0"
                    checkboxWrapTag="div"
                  >
                    <Checkbox
                      checkboxClassName={this.getCheckboxClass()}
                      increaseArea="20%"
                      label="Checkbox"
                    />
                    <Checkbox
                      checkboxClassName={this.getCheckboxClass()}
                      increaseArea="20%"
                      label="Checkbox, checked"
                      defaultChecked
                    />
                    <Checkbox
                      checkboxClassName={this.getCheckboxClass()}
                      increaseArea="20%"
                      label="Checkbox, disabled"
                      disabled
                    />
                    <Checkbox
                      checkboxClassName={this.getCheckboxClass()}
                      increaseArea="20%"
                      label="Checkbox, checked, disabled"
                      defaultChecked
                      disabled
                    />
                  </CheckboxGroup>
                </Col>
                <Col className="mt-2 mt-lg-0" lg={6} md={12}>
                  <RadioGroup
                    name="example"
                    radioWrapClassName="form-check p-0"
                    radioWrapTag="div"
                    value={radioValue}
                    onChange={(event, value) => {
                      this.setState({
                        radioValue: value,
                      });
                    }}
                  >
                    <Radio
                      increaseArea="20%"
                      label="Radio"
                      radioClassName={this.getRadioClass()}
                      value="1"
                    />
                    <Radio
                      increaseArea="20%"
                      label="Radio, checked"
                      radioClassName={this.getRadioClass()}
                      value="2"
                      defaultChecked
                    />
                    <Radio
                      increaseArea="20%"
                      label="Radio, disabled"
                      radioClassName={this.getRadioClass()}
                      value="3"
                      disabled
                    />
                    <Radio
                      increaseArea="20%"
                      label="Radio, checked, disabled"
                      radioClassName={this.getRadioClass()}
                      value="4"
                      defaultChecked
                      disabled
                    />
                  </RadioGroup>
                </Col>
              </Row>
            </Col>
            {colorSchemes && (
              <Row>
                <Col className="pt-4" md={11}>
                  <SkinColorSchemes color={color} onChange={this.handleColor} />
                </Col>
              </Row>
            )}
            <Row>
              <Col className="pt-4" md={11}>
                <pre className="m-0">
                  <code className="language-jsx">
                    {`import 'icheck/skins/${skin}/${
                      color || defaultColor
                    }.css';
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
    );
  }
}

Skin.propTypes = {
  color: PropTypes.string,
  colorSchemes: PropTypes.bool,
  defaultColor: PropTypes.string,
  skin: PropTypes.string,
  title: PropTypes.string,
};

Skin.defaultProps = {
  color: null,
  colorSchemes: false,
  defaultColor: null,
  skin: null,
  title: null,
};

export default Skin;
