import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  useNavigate,
  Routes,
} from 'react-router-dom';
import './styles.css';
import { useState } from 'react';

const Home = () => {
  const navigate = useNavigate();
  const [afghaniState, setAfghaniState] = useState(false);
  const [title, setTitle] = useState(
    'Welcome to the CRUD App!'
  );

  useEffect(() => {
    if (afghaniState === true) {
      setTitle('Afghanistan Number 1!!!!!!');
    } else {
      setTitle('Welcome to the CRUD App!');
    }
  }, [afghaniState]);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className='container'>
      <h1
        onClick={() => {
          setAfghaniState(!afghaniState);
        }}>
        {title}
      </h1>
      <div className='button-container'>
        <button
          className='button'
          onClick={() => handleNavigation('/create')}>
          Create
        </button>
        <button
          className='button'
          onClick={() => handleNavigation('/read')}>
          Read
        </button>
        <button
          className='button'
          onClick={() => handleNavigation('/update')}>
          Update
        </button>
        <button
          className='button'
          onClick={() => handleNavigation('/delete')}>
          Delete
        </button>
      </div>
      {afghaniState && (
        <img
          style={{
            position: 'absolute',
            left: '45%',
            top: '300px',
          }}
          src='https://www.geostrategia.fr/wp-content/uploads/2018/02/AFGHANISTAN-DRAPEAU.jpg'></img>
      )}
    </div>
  );
};

const Create = () => {
  const navigate = useNavigate();
  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const [erscheinungsjahr, setErscheinungsjahr] =
    useState('');
  const [id, setId] = useState('');

  const handleFormSubmit = () => {
    fetch('/api/items', {
      method: 'POST',
      body: JSON.stringify({
        bookName,
        author,
        erscheinungsjahr,
        id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data saved:', data);
        navigate(-1);
      })
      .catch((error) => {
        console.error('Error saving data:', error);
      });
  };

  const handleNavigation = () => {
    navigate(-1);
  };

  return (
    <div className='container'>
      <h1>Create Book</h1>
      <form>
        <label htmlFor='title'>BookName:</label>
        <input
          type='text'
          id='bookName'
          name='bookName'
          value={bookName}
          onChange={(e) => {
            setBookName(e.target.value);
          }}
        />

        <label htmlFor='author'>Author:</label>
        <input
          id='author'
          name='author'
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <br />

        <label htmlFor='erscheinungsjahr'>
          Erscheinungsjahr:
        </label>
        <input
          id='erscheinungsjahr'
          name='erscheinungsjahr'
          value={erscheinungsjahr}
          onChange={(e) => {
            setErscheinungsjahr(e.target.value);
          }}
        />

        <label htmlFor='id'>Id:</label>
        <input
          id='id'
          name='id'
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
      </form>
      <button
        onClick={() => {
          console.log({
            author,
            bookName,
            erscheinungsjahr,
            id,
          });
        }}>
        Logger
      </button>
      <button
        onClick={() => {
          handleFormSubmit();
        }}>
        Send Data
      </button>
      <button className='button' onClick={handleNavigation}>
        Go Back
      </button>
    </div>
  );
};

const Read = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(-1);
  };

  return (
    <div className='container'>
      <h1>Read Items</h1>
      {/* Add your read logic and display items here */}
      <button className='button' onClick={handleNavigation}>
        Go Back
      </button>
    </div>
  );
};

const Update = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(-1);
  };

  return (
    <div className='container'>
      <h1>Update Item</h1>
      {/* Add your update form and logic here */}
      <button className='button' onClick={handleNavigation}>
        Go Back
      </button>
    </div>
  );
};

const Delete = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(-1);
  };

  return (
    <div className='container'>
      <h1>Delete Item</h1>
      {/* Add your delete logic here */}
      <button className='button' onClick={handleNavigation}>
        Go Back
      </button>
    </div>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create' element={<Create />} />
      <Route path='/read' element={<Read />} />
      <Route path='/update' element={<Update />} />
      <Route path='/delete' element={<Delete />} />
    </Routes>
  </Router>
);

export default App;
