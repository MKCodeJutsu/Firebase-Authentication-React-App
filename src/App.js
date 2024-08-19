import {Routes, Route} from 'react-router-dom'
import About from "./pages/About";
import Profile from "./pages/Profile";
import "./comp/theme.css";
import Home from "./pages/Home";
import Error404 from './pages/error404';

// LEVEL 2
import DataContext from './context/Datacontext'
import { useContext } from "react";
import Signin from './pages/signin';
import Signup from './pages/signup';
function App() {
  const {
    theme,
    
  } = useContext(DataContext);



  return <div> 
    <div className={`app ${theme}`}>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='*' element= {<Error404/>} />
        <Route path='/about' element= {<About/>} />
        <Route path='/signin' element= {<Signin/>} />
        <Route path='/signup' element= {<Signup/>} />
        <Route path='/Profile' element= {<Profile/>} />
      </Routes>
    </div>
  </div>
}
export default App;