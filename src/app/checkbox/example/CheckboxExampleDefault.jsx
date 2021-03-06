/* eslint-disable react/jsx-curly-newline */
import { Checkbox, CheckboxGroup } from 'react-ui-icheck';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Example } from '../../common';

/* Source start */
const src = `import { Checkbox, CheckboxGroup } from 'react-ui-icheck';
import React, { Component } from 'react';

class CheckboxExampleDefault extends Component {
  constructor(props) {
    super(props);

    this.state = {
      i1: { checked: false, disabled: false },
      i2: { checked: true, disabled: false },
      i3: { checked: false, disabled: true },
    };
  }

  render() {
    const { i1, i2, i3 } = this.state;

    return (
      <CheckboxGroup
        checkboxWrapClassName="form-check p-0"
        checkboxWrapTag="div"
      >
        <Checkbox
          checkboxClassName="icheckbox_square-blue"
          checked={i1.checked}
          disabled={i1.disabled}
          label="#checkbox-1"
          onChange={(event, value) => this.setState({ i1: { ...i1, checked: value } })}
        />
        <Checkbox
          checkboxClassName="icheckbox_square-blue"
          checked={i2.checked}
          disabled={i2.disabled}
          label="#checkbox-2, <span>default</span>"
          labelTag="div"
          labelTagClassName="d-inline"
          onChange={(event, value) => this.setState({ i2: { ...i2, checked: value } })}
        />
        <Checkbox
          checkboxClassName="icheckbox_square-blue"
          checked={i3.checked}
          disabled={i3.disabled}
          labelTag="div"
          labelTagClassName="d-inline"
          onChange={(event, value) => this.setState({ i3: { ...i3, checked: value } })}
        >
          <span>#checkbox-3</span>
          {\`, \`}
          <span>disabled</span>
        </Checkbox>
      </CheckboxGroup>
    );
  }
}

export default CheckboxExampleDefault;`;
/* Source end */

@hot(module)
class CheckboxExampleDefault extends Component {
  constructor(props) {
    super(props);

    this.state = {
      i1: { checked: false, disabled: false },
      i2: { checked: true, disabled: false },
      i3: { checked: false, disabled: true },
    };
  }

  render() {
    const { i1, i2, i3 } = this.state;

    return (
      <Example src={src} title="Default">
        <CheckboxGroup
          checkboxWrapClassName="form-check p-0"
          checkboxWrapTag="div"
        >
          <Checkbox
            checkboxClassName="icheckbox_square-blue"
            checked={i1.checked}
            disabled={i1.disabled}
            label="#checkbox-1"
            onChange={(event, value) =>
              this.setState({ i1: { ...i1, checked: value } })
            }
          />
          <Checkbox
            checkboxClassName="icheckbox_square-blue"
            checked={i2.checked}
            disabled={i2.disabled}
            label="#checkbox-2, <span>default</span>"
            labelTag="div"
            labelTagClassName="d-inline"
            onChange={(event, value) =>
              this.setState({ i2: { ...i2, checked: value } })
            }
          />
          <Checkbox
            checkboxClassName="icheckbox_square-blue"
            checked={i3.checked}
            disabled={i3.disabled}
            labelTag="div"
            labelTagClassName="d-inline"
            onChange={(event, value) =>
              this.setState({ i3: { ...i3, checked: value } })
            }
          >
            <span>#checkbox-3</span>
            {`, `}
            <span>disabled</span>
          </Checkbox>
        </CheckboxGroup>
      </Example>
    );
  }
}

export default CheckboxExampleDefault;
