import React, {useState} from 'react';
import TaskHolder from '../../components/TaskHolder';
import Header from '../../components/Header';
import AddChip from '../../components/AddChip';
import {
  Container,
  TaskHolderContainer,
  TaskColumn
} from './styles/style'

const initialData = [
  {
    id: "123",
    title: "Design",
    tasks: [
      {
        id: "11",
        text: "1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit quaerat rem repudiandae, nemo dolorem officia molestiae rerum nesciunt tenetur modi laborum earum ipsam iusto, corporis veniam dolore ad expedita accusantium!"
      },
      {
        id: "12",
        text: "2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit quaerat rem repudiandae, nemo dolorem officia molestiae rerum nesciunt tenetur modi laborum earum ipsam iusto, corporis veniam dolore ad expedita accusantium!"
      },
      {
        id: "13",
        text: "3 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit quaerat rem repudiandae, nemo dolorem officia molestiae rerum nesciunt tenetur modi laborum earum ipsam iusto, corporis veniam dolore ad expedita accusantium!"
      },
      {
        id: "14",
        text: "4 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit quaerat rem repudiandae, nemo dolorem officia molestiae rerum nesciunt tenetur modi laborum earum ipsam iusto, corporis veniam dolore ad expedita accusantium!"
      }
    ]
  },
  {
    id: "234",
    title: "Todo",
    tasks: [
      {
        id: "21",
        text: "This is text 1"
      },
      {
        id: "22",
        text: "This is text 2"
      },
      {
        id: "23",
        text: "This is text 3"
      }
    ]
  },
  {
    id: "345",
    title: "Development",
    tasks: [
      
    ]
  },
  {
    id: "456",
    title: "QA",
    tasks: [

    ]
  },
  {
    id: "567",
    title: "Release ready",
    tasks: [

    ]
  },
  {
    id: "678",
    title: "Done",
    tasks: [

    ]
  },

];

export default function() {
  const [boardData, setBoardData] = useState(initialData);
  const [dragItem, setDragItem] = useState(null);
  const handleDragStart = (event) => {
    // console.log("Picked From", event.target.getAttribute('data-parent-id'));
    // console.log("Item", event.target.getAttribute('data-id'));
    setDragItem({
      id: event.target.getAttribute('data-id'),
      parentId: event.target.getAttribute('data-parent-id')
    });
  };
  const handleDrop = (event) => {
    // console.log("Dropped at", event.currentTarget.getAttribute('data-id'));
    const currentTarget = event.currentTarget;
    let newHolderId = currentTarget.getAttribute('data-parent-id');
    const temp = [...boardData];
    const oldHolderId = dragItem.parentId;
    const itemId = dragItem.id;
    if (!newHolderId) {
      newHolderId = currentTarget.getAttribute('data-id');

      // remove from old holder & get it out
      const oldHolderIndex = temp.findIndex((item) => { return item.id === oldHolderId });
      const oldItemIndex = temp[oldHolderIndex].tasks.findIndex((item) => { return item.id === itemId });
      const item = temp[oldHolderIndex].tasks.splice(oldItemIndex, 1);

      // add to new holder
      const newHolderIndex = temp.findIndex((item) => { return item.id === newHolderId });
      temp[newHolderIndex].tasks.push(...item);
    } else {
      const newHolderIndex = temp.findIndex((item) => { return item.id === newHolderId });
      const itemPos = currentTarget.getAttribute('data-id');
      const itemPosIndex = temp[newHolderIndex].tasks.findIndex((item) => { return item.id === itemPos });

      // remove from old holder & get it out
      const oldHolderIndex = temp.findIndex((item) => { return item.id === oldHolderId });
      const oldItemIndex = temp[oldHolderIndex].tasks.findIndex((item) => { return item.id === itemId });
      const item = temp[oldHolderIndex].tasks.splice(oldItemIndex, 1);


      // insert in the new Position
      const a1 = [...temp[newHolderIndex].tasks];
      const a2 = a1.splice(0, itemPosIndex);
      temp[newHolderIndex].tasks = a2.concat(item).concat(a1);
    }
    console.log(temp);
    setBoardData(temp);
    setDragItem(null);
  };
  const handleDropOver = (event) => {
    // console.log("Dropover", event.target);
  };
  const handleNewBoard = (value) => {
    setBoardData(boardData => {
      const temp = [...boardData];
      temp.push({
        id: + new Date() + "",
        title: value,
        tasks: []
      });
      return temp
    });
  };
  const handleNewTask = (value, id) => {
    const temp = [...boardData];
    const index = temp.findIndex((item) => { return item.id === id });
    if (index > -1) {
      temp[index].tasks.push({
        id: + new Date() + "",
        text: value
      }, );
    }
    setBoardData(temp);
  };
  const handleEditTask = (value, parentId, id) => {
    const temp = [...boardData];
    const parentIdIndex = temp.findIndex((item) => { return item.id === parentId });
    const itemIndex = temp[parentIdIndex].tasks.findIndex((item) => { return item.id === id });
    temp[parentIdIndex].tasks[itemIndex].text = value;
    setBoardData(temp);
  };

  const html = boardData.map((item) => (
    <TaskColumn key={item.id} >
      <TaskHolder
        title={item.title}
        handleDragStart={handleDragStart}
        handleDrop={handleDrop}
        handleDropOver={handleDropOver}
        handleNewTask={handleNewTask}
        handleEditTask={handleEditTask}
        data={item.tasks}
        id={item.id}
      />
    </TaskColumn>
  ));
  return(
    <Container>
      <Header />
      <TaskHolderContainer>
        {html}
        <TaskColumn>
          <AddChip placeholder={"Add a board"} isTransparent onSubmit={handleNewBoard} />
        </TaskColumn>
      </TaskHolderContainer>
    </Container>
  );
};