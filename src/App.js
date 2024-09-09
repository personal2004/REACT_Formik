import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import YoutubeForm from './components/youtubeform/youtubeform';
import FormikContainer from './components/FormContainer/formContainer';
function App() {
  return (
    <div className='App'>
      <Router>
      <Routes>
        <Route path='/' element={<FormikContainer/>}/>
        <Route path='/youtube' element={<YoutubeForm/>}/>
      </Routes>
      </Router>
    </div>

  );
}

export default App;
