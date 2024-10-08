import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import Swal from 'sweetalert2';
const Form = ({ setData }) => {
  const inputRef = useRef();
  const optionRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    let inputVal = inputRef.current.value;
    let optionVal = optionRef.current.value;

    if (!inputVal.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter content!',
      });
      return;
    }
    const newTodo = {
      title: inputVal,
      status: optionVal,
      date: new Date().toLocaleString('en-us'),
    };
    const api = 'http://localhost:3000';

    axios
      .post(`${api}/todos`, newTodo)
      .then((res) => setData((todos) => [res.data, ...todos]))
      .catch((err) => console.log(err));

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="container d-flex gap-2 mt-4 p-0">
      <input ref={inputRef} className="form-control w-75" type="text" />

      <select
        ref={optionRef}
        className="form-control fw-semibold  w-25 selects"
      >
        <option value="job">Job</option>
        <option value="important">Important</option>
        <option value="daily">Daily</option>
      </select>

      <button className="btn btn-warning fw-semibold" type="Submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
