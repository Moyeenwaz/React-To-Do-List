import React, {useState} from 'react';
import "./style.css";
import styled from 'styled-components'
import Form from './components/Form'
import Todo from './components/Todo'

 const Heading = styled.h1`
  color: white;
  text-align: center;
 `
export default function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all')
  const [filtered, setFiltered] = useState([])
  return (
    <div>
      <Heading>Mo's Todo List </Heading>
      <Form inputText = {inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} status={status} setStatus = {setStatus}/>
      <Todo todos = {todos} setTodos = {setTodos} />
    </div>
  );
}
