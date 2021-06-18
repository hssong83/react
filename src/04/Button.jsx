import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import withStyles, { css } from "./withStyles";

class Button extends PureComponent {
  render() {
    const {
      children,
      disabled,
      styles,
      large,
      xlarge,
      small,
      xsmall,
      primary,
      secondary,
      onPress,
    } = this.props;
    return (
      <button
        {...css(
          styles.default, //default스타일을 기본으로 적용
          xsmall && styles.xsmall,
          small && styles.small,
          large && styles.large,
          xlarge && styles.xlarge,
          secondary && styles.secondary,
          primary && styles.primary
        )}
        onClick={onPress}
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  xsmall: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
  secondary: PropTypes.bool,
  primary: PropTypes.bool,
  onPress: PropTypes.func,
};
Button.defaultProps = {
  onPress: () => {}, //콜백함수 실행할 때 unefined오류 발생을 막는다.
  xsmall: false,
  small: false,
  large: false,
  xlarge: false,
  secondary: false,
  primary: false,
};

export default withStyles(({ color, size, unit }) => ({
  //버튼의 기본모양
  default: {
    border: 1,
    borderStyle: "solid",
    borderColor: color.default,
    borderRadius: 2,
    color: color.default,
    fontSize: size.md,
    padding: unit * 2,
    cursor: "pointer",
    /*[responsive.small]: {
      width: "100%",
    },*/
  },
  xlarge: {
    fontSize: size.md,
  },
  large: {
    fontSize: size.lg,
  },
  small: {
    fontSize: size.sm,
    padding: unit,
  },
  xsmall: {
    fontSize: size.xs,
    padding: unit,
  },
  primary: {
    bordercolor: color.primary,
    color: color.white,
    backgroundColor: color.primary,
  },
  secondary: {
    bordercolor: color.secondary,
    color: color.secondary,
  },
}))(Button);
