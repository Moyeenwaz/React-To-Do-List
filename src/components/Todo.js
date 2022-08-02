import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem'

const TodoList = styled.div`
  display: flex;
  justify-content: center;
`
const Ul = styled.ul`
list-style: none;
`

const Todo = ({todos, setTodos}) => {
  return (
    <TodoList>
      <Ul>
       {todos.map(todo => (
       <ListItem 
       key = {todo.id}
       text = {todo.text} 
       todos = {todos}
       todo = {todo}
       setTodos = {setTodos} / >
         )
        )}
      </Ul>
    </TodoList>
  );
};

export default Todo;
