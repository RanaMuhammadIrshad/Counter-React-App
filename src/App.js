import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const initialCount = Number(localStorage.getItem('count')) || 0;
  const initialUser = localStorage.getItem('user') || 'Walter';
  const [count, setCount] = useState(initialCount);
  const [user, setUser] = useState(initialUser);

  const incrementHandler = () => {
    setCount((count) => count + 1);
  };
  const decrementHandler = () => {
    if (count === 0) {
      return;
    }
    setCount((count) => count - 1);
  };

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  const changeUserHandler = () => {
    setUser('Jesse');
  };

  const toggleUserHandler = () => {
    setUser((user) => (user === 'Walter' ? 'Jesse' : 'Walter'));
  };

  useEffect(() => {
    localStorage.setItem('user', user);
  }, [user]);

  return (
    <div className="container">
      <h1>The count is: {count}</h1>
      <h1>The user is: {user}</h1>
      <button onClick={changeUserHandler}>Change User</button>
      <button onClick={toggleUserHandler}>Toggle User</button>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  );
}

export default App;

/* 
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const initialCount = Number(localStorage.getItem('count')) || 0;
  const initialUser = localStorage.getItem('user') || 'Walter';

  const [count, setCount] = useState(initialCount);
  const [user, setUser] = useState(initialUser);

  // useEffect can take 2 arguments:
  // 1. a callback (the effect)
  // 2. a dependency array (optional)
  // if useEffect is called wtihout a dependency array,
  // it is run after each render

  // useEffect(() => {
  //   console.log('useEffect');
  // });
  
  // if we add a dependency array [count] as second argument,
  // useEffect will be called only
  // 1. on initial render, and
  // 2. whenever count changes (and whenever something in the dep. array changes)
  useEffect(() => {
    console.log('setting count');
    localStorage.setItem('count', count);
  }, [count]);

  useEffect(() => {
    console.log('empty array');
  }, []);

  useEffect(() => {
    console.log('setting user');
    localStorage.setItem('user', user);
  }, [user]);

  const increment = function() {
    setCount(count => count + 1);
  }

  const changeUser = function() {
    setUser('Jesse');
  }

  const toggleUser = function() {
    setUser(user => user === 'Walter' ? 'Jesse' : 'Walter');
  }
  return (
    <div className="container">
      <h1>The count is {count}</h1> 
      <h1>The user is {user}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={changeUser}>Change User</button>
      <button onClick={toggleUser}>Toggle User</button>
    </div>
  );
}

export default App; */
