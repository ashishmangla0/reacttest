import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App(props: any) {
  const [name,setName] = useState('');
  const handleSubmit = (e:any) =>{
    e.preventDefault();
    props.onSubmit?.();

  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        <button disabled={!name} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
