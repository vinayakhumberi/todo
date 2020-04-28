import React, { useRef } from 'react';
import {
  Container,
  Input
} from './style';

export default function (props) {
  const inputRef = useRef();
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const value = inputRef.current.value;
      if (value) {
        props.onSubmit(value);
      }
      inputRef.current.value = "";
    }
  }
  return (
    <Container isTransparent={props.isTransparent} >
      <span className="material-icons"  >add</span>
      <Input ref={inputRef} type="text" placeholder={props.placeholder}  onKeyDown={handleKeyDown} />
    </Container>
  );
}