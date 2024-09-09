import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import YoutubeForm from './components/youtubeform/youtubeform';
import FormikContainer from './components/FormContainer/formContainer';
import Login from './components/LoginForm/loginform';
function App() {
  return (
    <div className='App'>
      <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/formcontainer' element={<FormikContainer/>}/>
        <Route path='/youtube' element={<YoutubeForm/>}/>
      </Routes>
      </Router>
    </div>

  );
}

export default App;
