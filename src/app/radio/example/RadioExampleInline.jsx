/* eslint-disable react/jsx-curly-newline */
import { Radio, RadioGroup } from 'react-ui-icheck';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Example } from '../../common';

/* Source start */
const src = `import { Radio, RadioGroup } from 'react-ui-icheck';
import React, { Component } from 'react';

class RadioExampleInline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      radioValue: '2',
    };
  }

  render() {
    const { radioValue } = this.state;

    return (
      <RadioGroup
        className="d-flex align-items-center"
        name="radio"
        radioWrapClassName="form-check form-check-inline"
        radioWrapTag="div"
        value={radioValue}
        onChange={(event, value) => this.setState({ radioValue: value })}
      >
        <Radio label="#radio-1" radioClass="iradio_square-blue" value="1" />
        <Radio
          label={'#radio-2, <span>default</span>'}
          labelTag="div"
          labelTagClassName="d-inline"
          radioClass="iradio_square-blue"
          value="2"
        />
        <Radio
          labelTag="div"
          labelTagClassName="d-inline"
          radioClass="iradio_square-blue"
          value="3"
          disabled
        >
          <span>#radio-3</span>
          {\`, \`}
          <span className="label1">disabled</span>
        </Radio>
      </RadioGroup>
    );
  }
}

export default RadioExampleInline;`;
/* Source end */

@hot(module)
class RadioExampleInline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      radioValue: '2',
    };
  }

  render() {
    const { radioValue } = this.state;

    return (
      <Example src={src} title="Inline">
        <RadioGroup
          className="d-flex align-items-center"
          name="radio"
          radioWrapClassName="form-check form-check-inline"
          radioWrapTag="div"
          value={radioValue}
          onChange={(event, value) => this.setState({ radioValue: value })}
        >
          <Radio label="#radio-1" radioClass="iradio_square-blue" value="1" />
          <Radio
            label={'#radio-2, <span>default</span>'}
            labelTag="div"
            labelTagClassName="d-inline"
            radioClass="iradio_square-blue"
            value="2"
          />
          <Radio
            labelTag="div"
            labelTagClassName="d-inline"
            radioClass="iradio_square-blue"
            value="3"
            disabled
          >
            <span>#radio-3</span>
            {`, `}
            <span className="label1">disabled</span>
          </Radio>
        </RadioGroup>
      </Example>
    );
  }
}

export default RadioExampleInline;
