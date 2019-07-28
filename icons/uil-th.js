import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilTh = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM11,20H4V13h7Zm0-9H4V4h7Zm9,9H13V13h7Zm0-9H13V4h7Z" />
    </Svg>
  );
};

UilTh.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilTh.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilTh;