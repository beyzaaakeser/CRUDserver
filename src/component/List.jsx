import { Button } from 'bootstrap';
import React from 'react';
import { IoCalendarNumberSharp } from 'react-icons/io5';
import { CgDanger } from 'react-icons/cg';
import { FaBriefcase } from 'react-icons/fa';
import '../index.css';
import axios from 'axios';

const List = ({ item, setData }) => {
  let icon = null;

  switch (true) {
    case item.status === 'daily':
      icon = <IoCalendarNumberSharp className="fs-3 text-success" />;
      break;
    case item.status === 'important':
      icon = <CgDanger className="fs-2 text-danger" />;
      break;

    case item.status === 'job':
      icon = <FaBriefcase className="fs-3 text-primary" />;
      break;
  }

  const handleDelete = () => {
    // API'a todoyu silmek için istek at
    const api = 'http://localhost:3000';
    axios
      .delete(`${api}/todos/${item.id}`)
      // başarılı olursa > silinen todo'yu state den kaldır
      .then(() =>
        setData((todos) => todos.filter((todo) => todo.id !== item.id))
      ).catch((err)=> console.log(err))
  };

  return (
    <tr>
      <td className="text-center">{icon}</td>
      <td> {item.title}</td>
      <td className="d-flex justify-content-end gap-1">
        <button className="btn btn-outline-dark btn-sm btnWidth">Edit</button>
        <button
          onClick={handleDelete}
          className="btn btn-outline-danger btn-sm btnWidth "
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default List;
