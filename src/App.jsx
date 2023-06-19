import './App.css';
import {Routes, Route} from 'react-router-dom'
import RootLayout from './components/rootlayout';
import Dashboard from './components/dashboard';
import Profile from './components/profile';
import Create, { createAction } from './components/create';
import Transition from './components/trasnsition';
import FramerMotion from './components/motion';
import Framer from './components/framer';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Dashboard />}/>
          <Route path='/profile' element={<Profile />} /> 
          <Route path='/create' element={<Create/>} />
          <Route path='/motion' element={<FramerMotion/>} />
          <Route path='/framer' element={<Framer />} />
        </Route>
      </Routes>
    </div>
  )
}  

export default App;
