import React from 'react';
import styled from 'styled-components';

//Styled components
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`
const Select = styled.select`
  margin-left: 20px;
  color: white;
  background: transparent;
  outline: none;
  border: none;
  padding: 5px;
  cursor: pointer;
`
const Option = styled.option`
  color: black;
`
const Input = styled.input`
  outline: none;
  border: none;
  padding: 5px;
  background: none;
  border-bottom: solid 1px white;
  color: white;
  font-family: inherit;
  font-size: 20px;

  &::placeholder{
    color: white;
    font-size: 20px;
    font-style: italic;
  }
`

const Button = styled.button`
  padding: ;
  margin-left: 5px;
  cursor: pointer;
  color: white;
  background: transparent;
  border: none;
  font-size: 20px;
  font-weight: bold;
  outline: none;

  &:hover{
    background: lightblue;
  }
`
const Form = ({inputText, setInputText, todos, setTodos}) => {
  
  const inputTextHandler = e => {
    setInputText(e.target.value)
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([ ...todos,
      {text: inputText, completed: false, id: Math.random() * 1000}
    ])
    setInputText('');
  }
  return (
    <FormContainer>
      <div>
      <Input value = {inputText} onChange={inputTextHandler} type="text" placeholder='Type here'/>
      <Button onClick={submitTodoHandler}>&#43;</Button>
      </div>
      <div>
        <Select name="todos" id="">
          <Option value="all">All</Option>
          <Option value="completed">Completed</Option>
          <Option value="uncompleted">Uncompleted</Option>
        </Select>
      </div>
    </FormContainer>
  );
};

export default Form;
