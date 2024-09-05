import './App.css';
import SignIn from './components/signinform/signin';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import YoutubeForm from './components/youtubeform/youtubeform';
function App() {
  return (
      <Router>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/youtube' element={<YoutubeForm/>}/>
      </Routes>
      </Router>
  );
}

export default App;
