import { useState } from 'react';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import Form from './component/Form';
import Loading from './component/Loading';
import List from './component/List';

function App() {
  const [data, setData] = useState(null);


  const api = 'http://localhost:3000';

  useEffect(() => {
    axios
      .get(`${api}/todos`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-dark text-light min-vh-100 w-100 py-3">
      <h2 className="text-center fs-1">
        {' '}
        <span className="text-warning text-uppercase">Crud</span> Server
      </h2>

      <Form setData={setData} data={data} />

      {!data ? (
        <Loading />
      ) : (
        <table className="container table table-striped mt-5 table-hover ">
          <tbody>
            {data.map((item,index) => (
              <List key={index} item={item} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
