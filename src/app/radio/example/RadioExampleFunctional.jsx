import { Radio, RadioGroup } from 'react-ui-icheck';
import React, { useState } from 'react';
import { Example } from '../../common';

/* Source start */
const src = `import { Radio, RadioGroup } from 'react-ui-icheck';
import React, { useState } from 'react';

const RadioExampleFunctional = () => {
  const [radioValue, setRadioValue] = useState('2');

  // Example using Bootstrap CSS classes. Replace with your own.
  return (
    <RadioGroup
      className="p-4" // Bootstrap
      name="radio"
      radioWrapClassName="form-check p-0" // Bootstrap
      radioWrapTag="div"
      value={radioValue}
      onChange={(event, value) => setRadioValue(value)}
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
};

export default RadioExampleFunctional;`;
/* Source end */

const RadioExampleFunctional = () => {
  const [radioValue, setRadioValue] = useState('2');
  return (
    <Example src={src} title="Functional Component">
      <RadioGroup
        className="p-4"
        name="radio"
        radioWrapClassName="form-check p-0"
        radioWrapTag="div"
        value={radioValue}
        onChange={(event, value) => setRadioValue(value)}
      >
        <Radio label="#radio-1" radioClassName="iradio_square-blue" value="1" />
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
};

export default RadioExampleFunctional;
