import React from 'react';
import Text from '../Text';
import AddChip from '../AddChip';
import Task from '../Task';
import {
  Container,
  FixedHeight
} from './style'
export default function(props) {
  const handleDrop = (event) => {
    event.stopPropagation();
    event.preventDefault();
    props.handleDrop(event);
  };
  const handleDropOver = (event) => {
    event.preventDefault();
    props.handleDropOver(event);
    // console.log(event.currentTarget);
  };
  const handleNewTask = (value) => {
    props.handleNewTask(value, props.id);
  };
  return(
    <Container
      onDrop={handleDrop}
      onDragOver={handleDropOver}
      data-id={props.id}
    >
      <Text
        as={'h4'}
        text={props.title}
        color="#343434"
        fontWeight={600}
        fontSize={20}
        paddingBottom={10}
        paddingTop={10}
        paddingLeft={20}
        paddingRight={20}
      />
      <FixedHeight>
        {props.data.map((item) => (
          <Task
            key={item.id}
            handleDragStart={props.handleDragStart}
            onSubmit={props.handleEditTask}
            data={item}
            parentId={props.id}
            handleDrop={handleDrop}
            handleDropOver={handleDropOver}
          />
        ))}
      </FixedHeight>
      <AddChip placeholder={"Add a card"} onSubmit={handleNewTask} />
    </Container>
  );
}