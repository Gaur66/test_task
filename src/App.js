import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import UserList from './components/UserList';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/userlist' element={<UserList/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
