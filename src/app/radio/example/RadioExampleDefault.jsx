/* eslint-disable react/jsx-curly-newline */
import { Radio, RadioGroup } from 'react-ui-icheck';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Example } from '../../common';

/* Source start */
const src = `import { Radio, RadioGroup } from 'react-ui-icheck';
import React, { Component } from 'react';

class RadioExampleDefault extends Component {
  constructor(props) {
    super(props);

    this.state = {
      radioValue: '2',
    };
  }

  render() {
    const { radioValue } = this.state;

    // Example using Bootstrap CSS classes. Replace with your own.
    return (
      <RadioGroup
        name="radio"
        radioWrapClassName="form-check p-0" // Bootstrap
        radioWrapTag="div"
        value={radioValue}
        onChange={(event, value) => this.setState({ radioValue: value })}
      >
        <Radio label="#radio-1" radioClassName="iradio_square-blue" value="1" />
        <Radio
          label="#radio-2, <span>default</span>"
          labelTag="div"
          labelTagClassName="d-inline" // Bootstrap
          radioClassName="iradio_square-blue"
          value="2"
        />
        <Radio
          labelTag="div"
          labelTagClassName="d-inline" // Bootstrap
          radioClassName="iradio_square-blue"
          value="3"
          disabled
        >
          <span>#radio-3</span>
          {\`, \`}
          <span>disabled</span>
        </Radio>
      </RadioGroup>
    );
  }
}

export default RadioExampleDefault;`;
/* Source end */

@hot(module)
class RadioExampleDefault extends Component {
  constructor(props) {
    super(props);

    this.state = {
      radioValue: '2',
    };
  }

  render() {
    const { radioValue } = this.state;

    return (
      <Example src={src} title="Default">
        <RadioGroup
          name="radio"
          radioWrapClassName="form-check p-0"
          radioWrapTag="div"
          value={radioValue}
          onChange={(event, value) => this.setState({ radioValue: value })}
        >
          <Radio
            label="#radio-1"
            radioClassName="iradio_square-blue"
            value="1"
          />
          <Radio
            label="#radio-2, <span>default</span>"
            labelTag="div"
            labelTagClassName="d-inline"
            radioClassName="iradio_square-blue"
            value="2"
          />
          <Radio
            labelTag="div"
            labelTagClassName="d-inline"
            radioClassName="iradio_square-blue"
            value="3"
            disabled
          >
            <span>#radio-3</span>
            {`, `}
            <span>disabled</span>
          </Radio>
        </RadioGroup>
      </Example>
    );
  }
}

export default RadioExampleDefault;
