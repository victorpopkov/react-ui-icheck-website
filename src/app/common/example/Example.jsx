import { Button, Collapse, Form } from 'reactstrap';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Source from '../source/Source';
import styles from './Example.scss';

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
    const { collapse } = this.state;
    const { children, src, srcAppend, srcFunctionValue, srcPrepend, title } =
      this.props;

    return (
      <div>
        {title && <h5 className="my-4">{title}</h5>}
        <Form className={styles.example}>
          {children}
          {src !== false && (
            <Button
              className={styles['view-source']}
              color="primary"
              size="sm"
              outline
              onClick={this.toggleCollapse}
            >
              {collapse ? 'Hide source' : 'View source'}
            </Button>
          )}
        </Form>
        {src !== false && (
          <Collapse isOpen={collapse}>
            <Source
              src={src}
              srcAppend={srcAppend}
              srcFunctionValue={srcFunctionValue}
              srcPrepend={srcPrepend}
            >
              {children}
            </Source>
          </Collapse>
        )}
      </div>
    );
  }
}

Example.propTypes = {
  children: PropTypes.element.isRequired,
  src: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  srcAppend: PropTypes.string,
  srcFunctionValue: PropTypes.string,
  srcPrepend: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Example.defaultProps = {
  src: false,
  srcAppend: '',
  srcFunctionValue: '',
  srcPrepend: '',
};

export default Example;
