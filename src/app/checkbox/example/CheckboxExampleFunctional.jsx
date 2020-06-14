import { Checkbox, CheckboxGroup } from 'react-ui-icheck';
import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import { Example } from '../../common';

/* Source start */
const src = `import { Checkbox, CheckboxGroup } from 'react-ui-icheck';
import React, { useState } from 'react';

const CheckboxExampleFunctional = () => {
  const [i1Checked, setI1Checked] = useState(false);
  const [i2Checked, setI2Checked] = useState(true);
  const [i3Checked, setI3Checked] = useState(false);
  return (
    <CheckboxGroup
      checkboxWrapClassName="form-check p-0"
      checkboxWrapTag="div"
    >
      <Checkbox
        checkboxClass="icheckbox_square-blue"
        checked={i1Checked}
        label="#checkbox-1"
        onChange={(event, value) => setI1Checked(value)}
      />
      <Checkbox
        checkboxClass="icheckbox_square-blue"
        checked={i2Checked}
        label={'#checkbox-2, <span>default</span>'}
        labelTag="div"
        labelTagClassName="d-inline"
        onChange={(event, value) => setI2Checked(value)}
      />
      <Checkbox
        checkboxClass="icheckbox_square-blue"
        checked={i3Checked}
        labelTag="div"
        labelTagClassName="d-inline"
        disabled
        onChange={(event, value) => setI3Checked(value)}
      >
        <span>#checkbox-3</span>
        {\`, \`}
        <span>disabled</span>
      </Checkbox>
    </CheckboxGroup>
  );
};

export default CheckboxExampleFunctional;`;
/* Source end */

const CheckboxExampleFunctional = () => {
  const [i1Checked, setI1Checked] = useState(false);
  const [i2Checked, setI2Checked] = useState(true);
  const [i3Checked, setI3Checked] = useState(false);
  return (
    <Example src={src} title="Functional">
      <CheckboxGroup
        checkboxWrapClassName="form-check p-0"
        checkboxWrapTag="div"
      >
        <Checkbox
          checkboxClass="icheckbox_square-blue"
          checked={i1Checked}
          label="#checkbox-1"
          onChange={(event, value) => setI1Checked(value)}
        />
        <Checkbox
          checkboxClass="icheckbox_square-blue"
          checked={i2Checked}
          label={'#checkbox-2, <span>default</span>'}
          labelTag="div"
          labelTagClassName="d-inline"
          onChange={(event, value) => setI2Checked(value)}
        />
        <Checkbox
          checkboxClass="icheckbox_square-blue"
          checked={i3Checked}
          labelTag="div"
          labelTagClassName="d-inline"
          disabled
          onChange={(event, value) => setI3Checked(value)}
        >
          <span>#checkbox-3</span>
          {`, `}
          <span>disabled</span>
        </Checkbox>
      </CheckboxGroup>
    </Example>
  );
};

export default hot(module)(CheckboxExampleFunctional);
