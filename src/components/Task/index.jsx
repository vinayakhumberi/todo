import React, { useState, useRef, useEffect } from 'react';
import Text from '../Text';
import {
  Container,
  Input
} from './style';

export default function (props) {
  const [edit, setEdit] = useState(false);
  const inputRef = useRef();
  const handleDragStart = (event) => {
    props.handleDragStart(event);
  };
  const handelDoubleClick = (event) => {
    setEdit(true);
    inputRef.current.value = props.data.text;
  };
  const handleSubmit = () => {
    const value = inputRef.current.value;
    if (value) {
      props.onSubmit(value, props.parentId, props.data.id);
    }
    setEdit(false);
  }
  const handleOnKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }
  useEffect(() => {
    if(edit) {
      inputRef.current.focus();
    }
  }, [edit]);
  return (
    <Container
      draggable
      onDragStart={handleDragStart}
      data-id={props.data.id}
      data-parent-id={props.parentId}
      onDoubleClick={handelDoubleClick}
      onDrop={(e) => { e.stopPropagation(); e.preventDefault(); props.handleDrop(e); }}
      onDragOver={(e) => { e.stopPropagation(); e.preventDefault(); props.handleDropOver(e); }}
    >
      {!edit && <Text
        as={'h4'}
        text={props.data.text}
        fontSize={15}
        color="#343434"
      />}
      <Input ref={inputRef} edit={edit} type="text" onBlur={handleSubmit} onKeyDown={handleOnKeyDown} />
      <span className="material-icons">
              create
      </span>
    </Container>
  );
}