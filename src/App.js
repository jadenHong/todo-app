import React, { useState } from 'react';
// import Loading from './Loading';
import List from './List';

const App = () => {
  const [userInput, setUserInput] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleClick = () => {
    if (userInput.length > 0) {
      // 여기까지 잘하셨습니다 새로운 배열이 이제 나왔죠 푸쉬된게
      const newTodoList = todoList.concat(userInput);
      // 그럼 그 배열을 todoList에 다시 저장해줘야합니다
      setTodoList(newTodoList);
      //요걸 이렇게도 쓰실수있습니다
      // setTodoList(list => [...list, userInput]); // list가 지금 현재 todoList 배열을 가리키죠
      // ES6 문법으로 써보면
      // setTodoList([ ...todoList, userInput ]);

      setUserInput('');
      console.log(todoList);
    }
  }

  const handleChange = e => {
    const inputText = e.target.value;
    setUserInput(inputText);
  }



  /* const renderLoading = () => {
    return (
      <span>
        'Loading'...^__^
      </span>
    )
  } */
  return (
    <div className="app-wrapper">
      <div className="user-input">
        <input type="text" value={userInput} onChange={handleChange} />
        <button onClick={handleClick}>Confirm</button>
      </div>
      <List listValue={todoList} />
    </div>
  );
}

export default App;

// this.state = { data: xxx, arr: [], test: 'test' }
// =>
// const [data, setData] = useState();
// const [arr, setArr] = useState([]);
// const [test, setTest] = useState('');
