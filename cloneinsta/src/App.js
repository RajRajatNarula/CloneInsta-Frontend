import logo from './logo.svg';
import './App.css';
import LoginPage from './Components/LoginPage';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      {
        (localStorage.getItem("users")==undefined || localStorage.getItem("users")==null)?<LoginPage/>:<Home/>
      } 

    </div>
  );
}

export default App;
