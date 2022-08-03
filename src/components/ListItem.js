import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  max-width: 35vw;
  width: 500px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white; 
  padding: 10px 15px;
  border-radius: 4px;
  color: #777;
  transition: all 1s ease;
`;

const Button = styled.button`
  padding: ;
  margin-left: 5px;
  cursor: pointer;
  color: ${({checkmark}) => checkmark ? 'lightgreen' : 'tomato' };
  background: transparent;
  border: none;
  font-size: 20px;
  font-weight: bold;
  outline: none;

  &:hover{
    background: ${({checkmark}) => checkmark ? 'darkblue' : 'lightblue'};;
  }
`

const ListItem = ({text, todo, todos, setTodos}) => {
  const deleteHandler = (e) => {
    e.preventDefault();
    setTodos(todos.filter(el => el.id !== todo.id))
  }
  const completeHandler = (e) => {
    e.preventDefault();
    setTodos(todos.map(item => {
      if (item.id === todo.id){
        return{
          ...item, completed: !item.completed
        }
      }
      return item
    }));
  }
  return(
    <>
    <Item>
      <li className = {`${todo.completed ? 'completed' : ''}`}>{text}</li>
      <div>        
      <Button onClick = {completeHandler} checkmark = {true}>&#10003;</Button>
      <Button onClick={deleteHandler}>&#128465;</Button>
      </div>
    </Item>
    </>
  );
};

export default ListItem;
