import React from 'react';
import PropTypes from "prop-types";

import { Txt } from "./style";

const Text = function (props) {
  return (
    <Txt
      as={props.elementType}
      color={props.color}
      fontFamily={props.fontFamily}
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
      fontStyle={props.fontStyle}
      paddingLeft={props.paddingLeft}
      paddingBottom={props.paddingBottom}
      paddingRight={props.paddingRight}
      paddingTop={props.paddingTop}
      textAlign={props.textAlign}
      height={props.height}
      lineHeight={props.lineHeight}
      letterSpacing={props.letterSpacing}
      position={props.position}
      bottom={props.bottom}
      top={props.top}
      width={props.width}
      showPointer={props.showPointer}
      afterText={props.afterText}
      afterTextColor={props.afterTextColor}
      afterTextFontWeight={props.afterTextFontWeight}
      afterTextFontSize={props.afterTextFontSize}
      afterTextPaddingLeft={props.afterTextPaddingLeft}
      beforeText={props.beforeText}
      beforeTextColor={props.beforeTextColor}
      beforeTextFontWeight={props.beforeTextFontWeight}
      beforeTextFontSize={props.beforeTextFontSize}
      beforeTextPaddingLeft={props.beforeTextPaddingLeft}
      className={props.className}
      italicise={props.italicise}
      marginLeft={props.marginLeft}
      marginBottom={props.marginBottom}
      marginRight={props.marginRight}
      marginTop={props.marginTop}
      cursor={props.cursor}
      overflow={props.overflow}
      data-atm={props.dataAtm}
      textShadow={props.textShadow}
      display={props.display}
    >
      {props.children || props.text}
    </Txt>
  );
};

Text.propTypes = {
  /** Sets the color for the Text Component */
  color: PropTypes.string,

  /** Sets the padding for the Text Component */
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Sets the Font Weight of image of the card */
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Sets the height for the image of the card */
  fontStyle: PropTypes.string,

  /** The left padding */
  paddingLeft: PropTypes.number,

  /** The right padding */
  paddingRight: PropTypes.number,

  /** The top padding */
  paddingTop: PropTypes.number,

  /** The bottom padding */
  paddingBottom: PropTypes.number,

  /** Text to be displayed */
  text: PropTypes.string.isRequired,

  /** Sets the text-align Css property */
  textAlign: PropTypes.string,

  /** Sets the height of the div */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Sets the Line Height */
  lineHeight: PropTypes.number,

  /** Sets the letter-spacing CSS property */
  letterSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Sets the width for the Text component */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** Sets the cursor to pointer on Hover */
  showPointer: PropTypes.bool,

  /** If present attaches a after div with the specified styles */
  afterText: PropTypes.string,

  /** Text size for the after class div */
  afterTextFontSize: PropTypes.number,

  /** Text weight for the after class div */
  afterTextFontWeight: PropTypes.number,

  /** Text color for the after class div */
  afterTextColor: PropTypes.string,

  /** Left Padding for the after class */
  afterTextPaddingLeft: PropTypes.number,

  /** If present attaches a before div with the specified styles */
  beforeText: PropTypes.string,

  /** Text size for the before class div */
  beforeTextFontSize: PropTypes.number,

  /** Text weight for the before class div */
  beforeTextFontWeight: PropTypes.number,

  /** Text color for the before class div */
  beforeTextColor: PropTypes.string,

  /** Left Padding for the before class */
  beforeTextPaddingLeft: PropTypes.number,

  /** Set the position of the Text */
  position: PropTypes.string,

  /** The top position of Text if position is set to absolute */
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** The bottom position of Text if position is set to absolute */
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  cursor: PropTypes.string,

  /** To dynamically change the element type */
  elementType: PropTypes.string,

  /** Overflow property for the Conatiner */
  overflow: PropTypes.string,
  /** Provide your textShadow styles here Ex: "1px 1px 0 #000000" */
  textShadow: PropTypes.string,
  /** Provide a display value for your textbox */
  display: PropTypes.string,
};

Text.defaultProps = {
  color: "#ffffff",
  fontSize: 14,
  fontWeight: 400,
  fontStyle: "normal",
  fontFamily: '"Poppins",sans-serif',
  textAlign: "initial",
  height: "auto",
  lineHeight: null,
  letterSpacing: "0.11px",
  className: "",
  text: "",
  position: "relative",
  bottom: "auto",
  top: "auto",
  paddingLeft: 0,
  paddingBottom: 0,
  paddingRight: 0,
  paddingTop: 0,
  marginLeft: 0,
  marginBottom: 0,
  marginRight: 0,
  marginTop: 0,
  width: "auto",
  showPointer: false,
  afterText: "",
  afterTextColor: "#000000",
  afterTextFontWeight: 400,
  afterTextFontSize: 10,
  afterTextPaddingLeft: 0,
  beforeText: "",
  beforeTextColor: "#000000",
  beforeTextFontWeight: 400,
  beforeTextFontSize: 10,
  beforeTextPaddingLeft: 0,
  elementType: "div",
  overflow: "initial",
  textShadow: "",
  display: "block"
};

export default React.memo(Text);
