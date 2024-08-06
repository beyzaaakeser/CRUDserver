import React from 'react';

const Form = ({ setFormData }) => {



  const handleSubmit = (e) => {
    e.preventDefault();
    


  };

  return (
    <form className="container d-flex gap-2 mt-4 p-0">
      <input
        className="form-control w-75"
        type="text"
      />

      <select
        defaultValue="selected"
        className="form-control fw-semibold  w-25"
      >
        <option value="selected" className="text-center" disabled>
          Select
        </option>
        <option value="job">Job</option>
        <option value="important">Important</option>
        <option value="daily">Daily</option>
      </select>

      <button
        onSubmit={handleSubmit}
        className="btn btn-warning fw-semibold"
        type="Submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
