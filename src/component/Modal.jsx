import { useEffect, useState } from 'react';
import '../index.css';

const Modal = ({ close, handleUpdate, title, status }) => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputStatus, setInputStatus] = useState('');

  useEffect(() => {
    setInputTitle(title);
    setInputStatus(status);
  }, [title, status]);
  return (
    <div className="modal d-block bg-black bg-opacity-75">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Todo</h5>
            <button onClick={close} className="btn-close"></button>
          </div>
          <div className="modal-body">
            <form
              onSubmit={handleUpdate} // Form submit eventini handleUpdate fonksiyonuna bağladık
              className="container d-flex flex-column gap-3 mt-4 p-0"
            >
              <div className="d-flex gap-2">
                <input
                  name="title"
                  className="form-control w-100"
                  type="text"
                  value={inputTitle} // Input değeri state'den geliyor
                  onChange={(e) => setInputTitle(e.target.value)}
                  placeholder="Enter todo title"
                />

                <select
                  name="status"
                  className="form-control fw-semibold w-50  selects"
                  value={inputStatus} // Select değeri state'den geliyor
                  onChange={(e) => setInputStatus(e.target.value)}
                >
                  <option value="job">Job</option>
                  <option value="important">Important</option>
                  <option value="daily">Daily</option>
                </select>
              </div>

              <div className="modal-footer p-0 mt-3 d-flex justify-content-end gap-2">
                <button
                  onClick={close}
                  type="button"
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
