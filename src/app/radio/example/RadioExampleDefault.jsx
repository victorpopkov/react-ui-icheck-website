/* eslint-disable react/jsx-curly-newline */
import { Radio, RadioGroup } from 'react-ui-icheck';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Example } from '../../common';

/* Source start */
const defaultSrc = `import { Radio, RadioGroup } from 'react-ui-icheck';
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
        className="p-4" // Bootstrap
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
    const { src, title } = this.props;

    return (
      <Example src={src} title={title}>
        <RadioGroup
          className="p-4"
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

RadioExampleDefault.propTypes = {
  src: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  title: PropTypes.string,
};

RadioExampleDefault.defaultProps = {
  src: defaultSrc,
  title: 'Default',
};

export default RadioExampleDefault;
