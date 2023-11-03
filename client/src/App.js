import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/SignIn.module.css';

import SignIn from './components/SingIn';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/sigin' element={<SignIn />} />
      </Routes>
      
    </div>
  );
}

export default App;
