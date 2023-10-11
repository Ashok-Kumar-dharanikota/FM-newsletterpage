import { Route, Routes } from 'react-router-dom';
import './App.css';
import Subscribe from './Pages/Subscribe/Subscribe';
import Success from './Pages/Success/Success';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={ <Subscribe />}/>
        <Route path='/success' element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
