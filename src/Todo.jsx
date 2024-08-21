import React, { useState } from 'react';
import { FaTrashAlt, FaCheck } from 'react-icons/fa';

const Todo = () => {
  const [todos, setTodos] = useState([
    'Salam',
    'Necesen'
  ]);

  const [input, setInput] = useState('');
  const [checkedIndices, setCheckedIndices] = useState([]);

  const handleAddClick = () => {
    // input boş deyilsə çalışsın
    if (input !== '') {
      setTodos([...todos, input]);
      setInput(''); // Inputu təmizlə
    }
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((item, i) => i !== index));
  };


  const handleCheck = (index) => {
    if (checkedIndices.includes(index)) {
           // index dəyərini checkedIndicesdən çıxarır
      setCheckedIndices(checkedIndices.filter(i => i !== index));
    } else {
        // index dəyərini checkedIndicese əlavə edir
      setCheckedIndices([...checkedIndices, index]);
    }
  };

  return (
    <div className="todo-app">
      <h1>TODO List</h1>
      <div className="add">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddClick}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <span
              style={{
                // index checkedIndicesdə varsa  textDecoration 'line-through' olu  əks halda 'none' olur.
                textDecoration: checkedIndices.includes(index) ? 'line-through' : 'none',
                
              }}
            >
              {todo}
            </span>
            <FaCheck
              className='icon check'
              onClick={() => handleCheck(index)}
       
            />
            <FaTrashAlt
              className='icon delete'
              onClick={() => handleDelete(index)}
           
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
