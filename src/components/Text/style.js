import styled from "styled-components";
import { rem, getLineHeight } from "../../utils/style.util";

export const Txt = styled.div`
  color: ${props => props.color};
  font-family: ${props => props.fontFamily};
  font-size: ${props => rem(props.fontSize)};
  font-weight: ${props => props.fontWeight};
  font-style: ${props => props.fontStyle};
  padding-left: ${props => rem(props.paddingLeft)};
  padding-right: ${props => rem(props.paddingRight)};
  padding-top: ${props => rem(props.paddingTop)};
  padding-bottom: ${props => rem(props.paddingBottom)};
  margin-top: ${props => (props.marginTop ? rem(props.marginTop) : "0px")};
  margin-bottom: ${props =>
    props.marginBottom ? rem(props.marginBottom) : "0px"};
  margin-right: ${props =>
    props.marginRight ? rem(props.marginRight) : "0px"};
  margin-left: ${props => (props.marginLeft ? rem(props.marginLeft) : "0px")};
  text-align: ${props => props.textAlign};
  height: ${props =>
    typeof props.height === "string" ? props.height : rem(props.height)};
  line-height: ${props =>
    props.lineHeight
      ? isNaN(props.lineHeight)
        ? props.lineHeight || "inherit"
        : rem(props.lineHeight)
      : getLineHeight(props.fontSize)};
  letter-spacing: ${props =>
    typeof props.letterSpacing === "string"
      ? props.letterSpacing
      : rem(props.letterSpacing)};
  position: ${props => props.position};
  bottom: ${props =>
    typeof props.bottom === "string" ? props.bottom : rem(props.bottom)};
  top: ${props => (typeof props.top === "string" ? props.top : rem(props.top))};
  width: ${props =>
    typeof props.width === "string" ? props.width : rem(props.width)};
  cursor: ${props => (props.showPointer ? "pointer" : "inherit")};
  overflow: ${props => props.overflow};
  text-shadow: ${props => (props.textShadow ? props.textShadow : "none")};
  display: ${props => props.display};

  &:after {
    display: ${props => (props.afterText ? "auto" : "none")};
    content: ${props => `'${props.afterText}'`};
    color: ${props => props.afterTextColor};
    font-weight: ${props => props.afterTextFontWeight};
    font-size: ${props => rem(props.afterTextFontSize)};
    padding-left: ${props => props.afterTextPaddingLeft};
  }

  &:before {
    display: ${props => (props.beforeText ? "auto" : "none")};
    content: ${props => `'${props.beforeText}'`};
    color: ${props => props.beforeTextColor};
    font-weight: ${props => props.beforeTextFontWeight};
    font-size: ${props => rem(props.beforeTextFontSize)};
    padding-left: ${props => props.beforeTextPaddingLeft};
  }
`;
