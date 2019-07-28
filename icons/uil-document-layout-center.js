import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilDocumentLayoutCenter = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M9,12h6a1,1,0,0,0,1-1V5a1,1,0,0,0-1-1H9A1,1,0,0,0,8,5v6A1,1,0,0,0,9,12Zm1-6h4v4H10Zm11,4H19a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2ZM19,8h2a1,1,0,0,0,0-2H19a1,1,0,0,0,0,2ZM3,8H5A1,1,0,0,0,5,6H3A1,1,0,0,0,3,8Zm0,4H5a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Zm18,2H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm-8,4H3a1,1,0,0,0,0,2H13a1,1,0,0,0,0-2Z" />
    </Svg>
  );
};

UilDocumentLayoutCenter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilDocumentLayoutCenter.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilDocumentLayoutCenter;