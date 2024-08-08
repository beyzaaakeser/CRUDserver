import { Button } from 'bootstrap';
import React, { useState } from 'react';
import { IoCalendarNumberSharp } from 'react-icons/io5';
import { CgDanger } from 'react-icons/cg';
import { FaBriefcase } from 'react-icons/fa';
import '../index.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import Modal from './Modal';
import { FaRegPenToSquare } from 'react-icons/fa6';
import { FaRegTrashCan } from 'react-icons/fa6';
const List = ({ item, setData }) => {
  const [isOpen, setIsOpen] = useState(false);

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
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        const api = 'http://localhost:3000';
        axios
          .delete(`${api}/todos/${item.id}`)
          .then(() => {
            setData((todos) => todos.filter((todo) => todo.id !== item.id));
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success',
            });
          })
          .catch((err) => {
            console.log(err);
            Swal.fire({
              title: 'Error!',
              text: 'There was an error deleting your file.',
              icon: 'error',
            });
          });
      }
    });
  };
  return (
    <tr className="">
      <td className="text-center">{icon}</td>
      <td className=""> {item.title}</td>
      <td className=" text-nowrap text-end">
        <button
          onClick={() => setIsOpen(true)}
          className="btn btn-outline-dark btn-sm btnWidth"
        >
          <FaRegPenToSquare className="edit-icon" />
          <span> Edit</span>
        </button>
        <button
          onClick={handleDelete}
          className="btn btn-outline-danger btn-sm btnWidth "
        >
          <FaRegTrashCan className="delete-icon" />
          <span>Delete</span>
        </button>
      </td>
    </tr>
  );
};

export default List;
