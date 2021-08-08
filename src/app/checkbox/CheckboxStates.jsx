import { Badge, Button, Table } from 'reactstrap';
import { Checkbox } from 'react-ui-icheck';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

@hot(module)
class CheckboxStates extends Component {
  constructor(props) {
    super(props);

    this.handle1Change = this.handle1Change.bind(this);
    this.handle2Change = this.handle2Change.bind(this);
    this.handle3Change = this.handle3Change.bind(this);
    this.handle4Change = this.handle4Change.bind(this);
    this.handleCheckAll = this.handleCheckAll.bind(this);
    this.handleUncheckAll = this.handleUncheckAll.bind(this);
    this.handleDisableAll = this.handleDisableAll.bind(this);
    this.handleEnableAll = this.handleEnableAll.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      i1checked: false,
      i1disabled: false,
      i2checked: true,
      i2disabled: false,
      i3checked: false,
      i3disabled: true,
      i4checked: true,
      i4disabled: true,
    };
  }

  handle1Change(e, checked) {
    this.setState({ i1checked: checked });
  }

  handle2Change(e, checked) {
    this.setState({ i2checked: checked });
  }

  handle3Change(e, checked) {
    this.setState({ i3checked: checked });
  }

  handle4Change(e, checked) {
    this.setState({ i4checked: checked });
  }

  handleCheckAll() {
    this.setState({
      i1checked: true,
      i2checked: true,
      i3checked: true,
      i4checked: true,
    });
  }

  handleUncheckAll() {
    this.setState({
      i1checked: false,
      i2checked: false,
      i3checked: false,
      i4checked: false,
    });
  }

  handleDisableAll() {
    this.setState({
      i1disabled: true,
      i2disabled: true,
      i3disabled: true,
      i4disabled: true,
    });
  }

  handleEnableAll() {
    this.setState({
      i1disabled: false,
      i2disabled: false,
      i3disabled: false,
      i4disabled: false,
    });
  }

  handleReset() {
    this.setState({
      i1checked: false,
      i1disabled: false,
      i2checked: true,
      i2disabled: false,
      i3checked: false,
      i3disabled: true,
      i4checked: true,
      i4disabled: true,
    });
  }

  renderYesNo = (value) => {
    return value ? (
      <Badge color="success">Yes</Badge>
    ) : (
      <Badge className="text-dark" color="light">
        No
      </Badge>
    );
  };

  render() {
    const {
      i1checked,
      i1disabled,
      i2checked,
      i2disabled,
      i3checked,
      i3disabled,
      i4checked,
      i4disabled,
    } = this.state;

    return (
      <div>
        <h5 className="mb-4 mt-4">States</h5>
        <Table>
          <thead>
            <tr>
              <th>Element</th>
              <th>Checked</th>
              <th>Disabled</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="align-middle">
                <Checkbox
                  checkboxClassName="icheckbox_square-blue"
                  label="#checkbox-1"
                  checked={i1checked}
                  disabled={i1disabled}
                  onChange={this.handle1Change}
                />
              </td>
              <td className="align-middle">{this.renderYesNo(i1checked)}</td>
              <td className="align-middle">{this.renderYesNo(i1disabled)}</td>
            </tr>
            <tr>
              <td className="align-middle">
                <Checkbox
                  checkboxClassName="icheckbox_square-blue"
                  label="#checkbox-2, <span>checked</span>"
                  checked={i2checked}
                  disabled={i2disabled}
                  onChange={this.handle2Change}
                />
              </td>
              <td className="align-middle">{this.renderYesNo(i2checked)}</td>
              <td className="align-middle">{this.renderYesNo(i2disabled)}</td>
            </tr>
            <tr>
              <td className="align-middle">
                <Checkbox
                  checkboxClassName="icheckbox_square-blue"
                  label="#checkbox-3, <span>disabled</span>"
                  checked={i3checked}
                  disabled={i3disabled}
                  onChange={this.handle3Change}
                />
              </td>
              <td className="align-middle">{this.renderYesNo(i3checked)}</td>
              <td className="align-middle">{this.renderYesNo(i3disabled)}</td>
            </tr>
            <tr>
              <td className="align-middle">
                <Checkbox
                  checkboxClassName="icheckbox_square-blue"
                  label="#checkbox-4, <span>checked</span>, <span>disabled</span>"
                  checked={i4checked}
                  disabled={i4disabled}
                  onChange={this.handle4Change}
                />
              </td>
              <td className="align-middle">{this.renderYesNo(i4checked)}</td>
              <td className="align-middle">{this.renderYesNo(i4disabled)}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td className="buttons" colSpan={3}>
                <Button size="sm" onClick={this.handleCheckAll} outline>
                  Check All
                </Button>
                <Button size="sm" onClick={this.handleUncheckAll} outline>
                  Uncheck All
                </Button>
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
