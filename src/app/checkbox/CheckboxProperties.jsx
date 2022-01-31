import { Col, Row } from 'reactstrap';
import React from 'react';

const CheckboxProperties = () => (
  <div>
    <h5 className="my-4">Properties</h5>
    <Row>
      <Col xs={12}>
        <h6 className="my-4">CheckboxGroup</h6>
        <pre>
          <code className="language-jsx">
            {`CheckboxGroup.propTypes = {
  children: PropTypes.node.isRequired,
  checkboxWrapClassName: PropTypes.string,
  checkboxWrapTag: PropTypes.string,
  className: PropTypes.string,
};`}
          </code>
        </pre>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <h6 className="my-4">Checkbox</h6>
        <pre>
          <code className="language-jsx">
            {`Checkbox.propTypes = {
  activeClassName: PropTypes.string,        // default: 'active'
  aria: PropTypes.bool,                     // default: false
  checkboxClassName: PropTypes.string,      // default: 'icheckbox'
  checked: PropTypes.bool,                  // default: false
  checkedClassName: PropTypes.string,       // default: 'checked'
  children: PropTypes.node,
  className: PropTypes.string,
  defaultChecked: PropTypes.bool,           // default: false
  disabled: PropTypes.bool,                 // default: false
  disabledClassName: PropTypes.string,      // default: 'disabled'
  focusClassName: PropTypes.string,         // default: 'focus'
  hoverClassName: PropTypes.string,         // default: 'hover'
  id: PropTypes.string,
  increaseArea: PropTypes.string,           // default: ''
  indeterminate: PropTypes.bool,            // default: true
  indeterminateClassName: PropTypes.string, // default: 'indeterminate'
  inheritClassName: PropTypes.bool,         // default: false
  inheritID: PropTypes.bool,                // default: false
  insert: PropTypes.node,
  label: PropTypes.node,
  labelClassName: PropTypes.string,
  labelHover: PropTypes.bool,               // default: true
  labelHoverClass: PropTypes.string,        // default: 'hover'
  labelTag: PropTypes.string,               // default: 'span'
  labelTagClassName: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseUp: PropTypes.func,
  onTouchEnd: PropTypes.func,
  onTouchStart: PropTypes.func,
};`}
          </code>
        </pre>
      </Col>
    </Row>
  </div>
);

export default CheckboxProperties;
