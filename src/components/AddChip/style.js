import styled from "styled-components";
import { rem } from "../../utils/style.util";

export const Container = styled.div`
  padding: ${rem(10)} ${rem(0)};
  display: flex;
  ${props => props.isTransparent ? `background: rgba(255, 255, 255, 0.54);` : ''}
  span {
    padding: ${rem(0)} ${rem(10)};
  }
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  font-weight: 500;
  font-size: 15px;
  color: #343434;
  &:focus{
    outline: none;
  }
  &::placeholder {
    font-weight: 500;
    font-size: 15px;
    color: #343434;
  }
`;