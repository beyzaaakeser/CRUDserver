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
    const params = { _sort: "-date", _page: 1 };
    axios
      .get(`${api}/todos`,{params})
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-dark text-light min-vh-100  py-3 app-container">
      <h2 className="text-center fs-1">
        {' '}
        <span className="text-warning text-uppercase">Crud</span> Server
      </h2>

      <Form setData={setData} />

      {!data ? (
        <Loading />
      ) : (
        <table className="container table table-striped mt-5 table-hover ">
          <tbody>
            {data.map((item,index) => (
              <List key={index} item={item} setData={setData} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
