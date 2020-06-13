import './Example.scss';
import { Button, Collapse, Form } from 'reactstrap';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Source from '../source/Source';

@hot(module)
class Example extends Component {
  constructor(props) {
    super(props);

    this.toggleCollapse = this.toggleCollapse.bind(this);

    this.state = {
      collapse: false,
    };
  }

  toggleCollapse() {
    const { collapse } = this.state;

    this.setState({ collapse: !collapse });
  }

  render() {
    const {
      children,
      srcAppend,
      srcFunctionValue,
      srcPrepend,
      title,
    } = this.props;
    const { collapse } = this.state;

    return (
      <div>
        <h5 className="mb-4 mt-4">{title}</h5>
        <Form styleName="example">
          {children}
          <Button
            color="primary"
            size="sm"
            styleName="view-source"
            outline
            onClick={this.toggleCollapse}
          >
            View source
          </Button>
        </Form>
        <Collapse isOpen={collapse}>
          <Source
            srcAppend={srcAppend}
            srcFunctionValue={srcFunctionValue}
            srcPrepend={srcPrepend}
          >
            {children}
          </Source>
        </Collapse>
      </div>
    );
  }
}

Example.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  srcAppend: PropTypes.string,
  srcFunctionValue: PropTypes.string,
  srcPrepend: PropTypes.string,
};

Example.defaultProps = {
  srcAppend: '',
  srcFunctionValue: '',
  srcPrepend: '',
};

export default Example;
