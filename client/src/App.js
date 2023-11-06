import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import SignUp from './components/SingUp';
// import SignIn from './components/SingIn';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header />} />
        {/* <Route path='/sigin' element={<SignIn />} /> */}
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      
    </div>
  );
}

export default App;
