import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import styles from './SkinColorSchemes.scss';

class SkinColorSchemes extends React.Component {
  constructor(props) {
    super(props);

    this.handleColor = this.handleColor.bind(this);

    const { color } = this.props;

    this.state = {
      prevColor: null,
      color,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.color !== state.prevColor) {
      return {
        color: props.color,
        prevColor: props.color,
      };
    }
    return null;
  }

  handleColor(color) {
    const { onChange } = this.props;

    this.setState({ color });

    if (onChange) {
      onChange(color);
    }
  }

  render() {
    const { color } = this.state;

    const colors = [
      'Black',
      'Red',
      'Green',
      'Blue',
      'Aero',
      'Grey',
      'Orange',
      'Yellow',
      'Pink',
      'Purple',
    ];

    const list = colors.map((listColor) => {
      let newColor = listColor.toLowerCase();
      if (newColor === 'black') {
        newColor = '';
      }

      return (
        <li
          className={classNames(newColor, { active: color === newColor })}
          key={newColor}
          title={listColor}
        >
          <button
            aria-label="Change Color Scheme"
            type="button"
            onClick={() => this.handleColor(newColor)}
          />
        </li>
      );
    });

    return (
      <div className={styles.colors}>
        <strong>Color Schemes</strong>
        <ul>{list}</ul>
      </div>
    );
  }
}

SkinColorSchemes.propTypes = {
  color: PropTypes.string,
  onChange: PropTypes.func,
};

SkinColorSchemes.defaultProps = {
  color: '',
  onChange: null,
};

export default SkinColorSchemes;
