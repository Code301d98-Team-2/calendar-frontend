import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Footer from './components/Footer';
import Body from './components/Body';
import DisplayCalendar from "./components/DisplayCalendar"
import EmployeeData from './components/EmployeeData';
import EmployeeForm from './components/EmployeeForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element=<Body /> >
          </Route>
          <Route exact path="/about" element=<About /> >
          </Route>
          <Route exact path='/addEmployee' element=<EmployeeForm /> >
          </Route>
          <Route exact path='/viewEmployees' element=<EmployeeData /> >
          </Route>
          <Route exact path='/displayCalendar' element=<DisplayCalendar /> >
          </Route>
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
