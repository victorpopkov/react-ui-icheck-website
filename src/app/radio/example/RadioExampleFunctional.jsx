import { Radio, RadioGroup } from 'react-ui-icheck';
import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import { Example } from '../../common';

/* Source start */
const src = `import { Radio, RadioGroup } from 'react-ui-icheck';
import React, { useState } from 'react';

const RadioExampleFunctional = () => {
  const [radioValue, setRadioValue] = useState('2');
  return (
    <RadioGroup
      name="radio"
      radioWrapClassName="form-check p-0"
      radioWrapTag="div"
      value={radioValue}
      onChange={(event, value) => setRadioValue(value)}
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
        <span>disabled</span>
      </Radio>
    </RadioGroup>
  );
};

export default RadioExampleFunctional;`;
/* Source end */

const RadioExampleFunctional = () => {
  const [radioValue, setRadioValue] = useState('2');
  return (
    <Example src={src} title="Functional">
      <RadioGroup
        name="radio"
        radioWrapClassName="form-check p-0"
        radioWrapTag="div"
        value={radioValue}
        onChange={(event, value) => setRadioValue(value)}
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
          <span>disabled</span>
        </Radio>
      </RadioGroup>
    </Example>
  );
};

export default hot(module)(RadioExampleFunctional);