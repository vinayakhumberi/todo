import styled from "styled-components";
import { rem } from "../../utils/style.util";

export const Container = styled.div`
  margin: ${rem(10)} ${rem(20)};
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.18);
  background: white;
  padding: ${rem(10)} ${rem(10)};
  padding-right: 18px;
  position: relative;
  border-radius: 4px;
  &:hover{
    cursor: grab;
  }
  .material-icons{
    position: absolute;
    top: 13px;
    right: 8px;
    font-size: 13px;
    opacity: 0.5;
  }
`;

export const Input = styled.textarea`
  background: transparent;
  border: none;
  font-weight: 500;
  font-size: 15px;
  color: #343434;
  display: ${props => props.edit ? 'block' : 'none'};
  min-height: 5em;
	max-height: 500px;
  height: auto;
  &:focus{
    outline: none;
  }
  &::placeholder {
    font-weight: 500;
    font-size: 15px;
    color: #343434;
  }
`;
