import { Badge, Button, Table } from 'reactstrap';
import { Radio, RadioGroup } from 'react-ui-icheck';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

@hot(module)
class CheckboxStates extends Component {
  constructor(props) {
    super(props);

    this.handle1Change = this.handle1Change.bind(this);
    this.handle2Change = this.handle2Change.bind(this);
    this.handle3Change = this.handle3Change.bind(this);
    this.handleDisableAll = this.handleDisableAll.bind(this);
    this.handleEnableAll = this.handleEnableAll.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      radio1Disabled: {
        '1': false,
        '2': false,
        '3': true,
      },
      radio1Value: '1',
      radio2Disabled: {
        '1': false,
        '2': false,
        '3': true,
      },
      radio2Value: '2',
      radio3Disabled: {
        '1': false,
        '2': false,
        '3': true,
      },
      radio3Value: '3',
    };
  }

  handle1Change(e, value) {
    this.setState({ radio1Value: value });
  }

  handle2Change(e, value) {
    this.setState({ radio2Value: value });
  }

  handle3Change(e, value) {
    this.setState({ radio3Value: value });
  }

  handleDisableAll() {
    this.setState({
      radio1Disabled: {
        '1': true,
        '2': true,
        '3': true,
      },
      radio2Disabled: {
        '1': true,
        '2': true,
        '3': true,
      },
      radio3Disabled: {
        '1': true,
        '2': true,
        '3': true,
      },
    });
  }

  handleEnableAll() {
    this.setState({
      radio1Disabled: {
        '1': false,
        '2': false,
        '3': false,
      },
      radio2Disabled: {
        '1': false,
        '2': false,
        '3': false,
      },
      radio3Disabled: {
        '1': false,
        '2': false,
        '3': false,
      },
    });
  }

  handleReset() {
    this.setState({
      radio1Disabled: {
        '1': false,
        '2': false,
        '3': true,
      },
      radio1Value: '1',
      radio2Disabled: {
        '1': false,
        '2': false,
        '3': true,
      },
      radio2Value: '2',
      radio3Disabled: {
        '1': false,
        '2': false,
        '3': true,
      },
      radio3Value: '3',
    });
  }

  renderYesNo = (value) => {
    return value ? (
      <Badge color="success">Yes</Badge>
    ) : (
      <Badge color="light">No</Badge>
    );
  };

  render() {
    const {
      radio1Disabled,
      radio1Value,
      radio2Disabled,
      radio2Value,
      radio3Disabled,
      radio3Value,
    } = this.state;

    return (
      <div>
        <h5 className="mb-4 mt-4">States</h5>
        <Table className>
          <thead>
            <tr>
              <th>Element</th>
              <th>Value</th>
              <th>Disabled</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="align-middle">
                <RadioGroup
                  name="radio"
                  radioWrapClassName="form-check p-0"
                  radioWrapTag="div"
                  value={radio1Value}
                  onChange={(event, value) =>
                    this.setState({ radio1Value: value })
                  }
                >
                  <Radio
                    disabled={radio1Disabled['1']}
                    label={'#radio-1-1, <span>default</span>'}
                    radioClass="iradio_square-blue"
                    value="1"
                  />
                  <Radio
                    disabled={radio1Disabled['2']}
                    label="#radio-1-2"
                    labelTag="div"
                    labelTagClassName="d-inline"
                    radioClass="iradio_square-blue"
                    value="2"
                  />
                  <Radio
                    disabled={radio1Disabled['3']}
                    label={'#radio-1-3, <span>disabled</span>'}
                    labelTag="div"
                    labelTagClassName="d-inline"
                    radioClass="iradio_square-blue"
                    value="3"
                  />
                </RadioGroup>
              </td>
              <td className="align-middle">
                <Badge>{radio1Value}</Badge>
              </td>
              <td className="align-middle">
                {this.renderYesNo(radio1Disabled[radio1Value])}
              </td>
            </tr>
            <tr>
              <td className="align-middle">
                <RadioGroup
                  name="radio"
                  radioWrapClassName="form-check p-0"
                  radioWrapTag="div"
                  value={radio2Value}
                  onChange={(event, value) =>
                    this.setState({ radio2Value: value })
                  }
                >
                  <Radio
                    disabled={radio2Disabled['1']}
                    label="#radio-2-1"
                    radioClass="iradio_square-blue"
                    value="1"
                  />
                  <Radio
                    disabled={radio2Disabled['2']}
                    label={'#radio-2-2, <span>default</span>'}
                    labelTag="div"
                    labelTagClassName="d-inline"
                    radioClass="iradio_square-blue"
                    value="2"
                  />
                  <Radio
                    disabled={radio2Disabled['3']}
                    label={'#radio-2-3, <span>disabled</span>'}
                    labelTag="div"
                    labelTagClassName="d-inline"
                    radioClass="iradio_square-blue"
                    value="3"
                  />
                </RadioGroup>
              </td>
              <td className="align-middle">
                <Badge>{radio2Value}</Badge>
              </td>
              <td className="align-middle">
                {this.renderYesNo(radio2Disabled[radio2Value])}
              </td>
            </tr>
            <tr>
              <td className="align-middle">
                <RadioGroup
                  name="radio"
                  radioWrapClassName="form-check p-0"
                  radioWrapTag="div"
                  value={radio3Value}
                  onChange={(event, value) =>
                    this.setState({ radio3Value: value })
                  }
                >
                  <Radio
                    disabled={radio3Disabled['1']}
                    label="#radio-3-1"
                    radioClass="iradio_square-blue"
                    value="1"
                  />
                  <Radio
                    disabled={radio3Disabled['2']}
                    label="#radio-3-2"
                    labelTag="div"
                    labelTagClassName="d-inline"
                    radioClass="iradio_square-blue"
                    value="2"
                  />
                  <Radio
                    disabled={radio3Disabled['3']}
                    label={
                      '#radio-3-3, <span>default</span>, <span>disabled</span>'
                    }
                    labelTag="div"
                    labelTagClassName="d-inline"
                    radioClass="iradio_square-blue"
                    value="3"
                  />
                </RadioGroup>
              </td>
              <td className="align-middle">
                <Badge>{radio3Value}</Badge>
              </td>
              <td className="align-middle">
                {this.renderYesNo(radio3Disabled[radio3Value])}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td className="buttons" colSpan={3}>
                <Button size="sm" onClick={this.handleDisableAll} outline>
                  Disable All
                </Button>
                <Button size="sm" onClick={this.handleEnableAll} outline>
                  Enable All
                </Button>
                <Button size="sm" onClick={this.handleReset} outline>
                  Reset
                </Button>
              </td>
            </tr>
          </tfoot>
        </Table>
      </div>
    );
  }
}

export default CheckboxStates;
